import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup | undefined;
  public error$: Observable<any> | undefined;
  public globalError: HttpErrorResponse | undefined;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  signIn({
    value,
    valid,
    dirty,
  }: {
    value: { email: string; password: string };
    valid: boolean;
    dirty: boolean;
  }): void {}
}
