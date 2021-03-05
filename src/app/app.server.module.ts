import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { ShellComponent } from '@core/index';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [ShellComponent],
})
export class AppServerModule {}
