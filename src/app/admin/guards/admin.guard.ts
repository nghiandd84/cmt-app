import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';


@Injectable()
export class AdminGuard implements CanActivate {
  private token: string = '';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.token) {
    //   return true;
    // } else if (!this.token) {
    //   this.store.dispatch(
    //     new fromActions.Go({
    //       path: ['/'],
    //       query: { queryParams: { returnUrl: state.url } },
    //     })
    //   );
    // }
    // return false;
    return true;
  }
}
