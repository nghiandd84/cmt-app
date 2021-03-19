import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import * as fromContainers from './containers';
import * as fromServices from './services';

import { throwIfAlreadyLoaded } from './common/module-import-guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    ...fromServices.services,
    SwUpdate
  ],
  declarations: [...fromContainers.containers],
  exports: [
    ...fromContainers.containers
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
