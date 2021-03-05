function patchPostCSS(webpackConfig, tailWindConfig, components = false) {
  if (!tailWindConfig) {
    console.error('Missing tailwind config: ', tailWindConfig);
    return;
  }
  const pluginName = 'autoprefixer';
  for (const rule of webpackConfig.module.rules) {
    if (!(rule.use && rule.use.length > 0) || (!components && rule.exclude)) {
      continue;
    }
    for (const useLoader of rule.use) {
      if (!(useLoader.options && useLoader.options.postcssOptions)) {
        continue;
      }
      const originPostcssOptions = useLoader.options.postcssOptions;
      useLoader.options.postcssOptions = (loader) => {
        const _postcssOptions = originPostcssOptions(loader);
        const insertIndex = _postcssOptions.plugins.findIndex(
          ({ postcssPlugin }) =>
            postcssPlugin && postcssPlugin.toLowerCase() === pluginName
        );
        if (insertIndex !== -1) {
          _postcssOptions.plugins.splice(insertIndex, 0, [
            'tailwindcss',
            tailWindConfig,
          ]);
        } else {
          console.error(`${pluginName} not found in postcss plugins`);
        }
        return _postcssOptions;
      };
    }
  }
}

module.exports = (config) => {
  // console.log(config);
  // config.optimization.splitChunks.chunks = 'all';
  const tailWindConfig = require('./tailwind.config.js');
  patchPostCSS(config, tailWindConfig, true);
  return config;
};
