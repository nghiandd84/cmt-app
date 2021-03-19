import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Auth } from '@public/models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LoginService {
  public baseUrl: string = environment.API_URL;

  private apiLogin = environment.API_LOGIN;

  constructor(
    private http: HttpClient
    ) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<Auth>(`${this.apiLogin}`, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
