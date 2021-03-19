// https://help.syncfusion.com/angular/gettingstarted/getting-started-with-webpack-aot?cs-save-lang=1&cs-lang=ts

const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@environments': path.resolve(__dirname, '../../src/environments'),
      '@core': path.resolve(__dirname, '../../src/app/core'),
      '@public/*': path.resolve(__dirname, '../../src/app/public'),
      '@admin/*': path.resolve(__dirname, '../../src/app/admin'),
      '@shared': path.resolve(__dirname, '../../src/app/shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new AngularCompilerPlugin({
      sourceMap: true,
      tsConfigPath: 'tsconfig.json',
      skipCodeGeneration: true,
      compilerOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        skipLibCheck: true,
      },
      index: './src/index.html',
      main: './src/main.ts',
      polyfills: './src/polyfills.ts',
      exclude: [
        'node_modules',
        'e2e',
      ],
    }),
  ],
};

const options = {
  webpackOptions,
};

module.exports = webpackPreprocessor(options);
