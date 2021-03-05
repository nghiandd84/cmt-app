import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // private token$: Observable<string>;
  private authorization = '';

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    // build the headers you want
    const headers = {
      Authorization: `Bearer ${this.authorization}`,
    };

    // clone the request
    const clone = req.clone({ setHeaders: headers });
    return next.handle(clone);
    /*
    // pass it to the next interceptor
    return next.handle(clone).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            this.store.dispatch(
              new fromActions.Go({
                path: ['/'],
              })
            );
          }
        }
      }
    );
    */
  }
}
