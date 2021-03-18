import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  constructor(private swUpdate: SwUpdate) {}

  init() {
    this.swUpdate.available.subscribe((event) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.swUpdate
        .activateUpdate()
        .then(() => this.updateApp(event.current.appData));
    });
  }

  private updateApp(appData: any) {
    // TODO: Show new Version message if require
    console.log('New Version was updated successfully', appData);
    document.location.reload();
  }
}
