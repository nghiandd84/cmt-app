import { Component, Input } from '@angular/core';

import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  template: `
    <div *ngIf="shouldShowErrors()" class="validation-errors">
      <div class="error-msg">{{ getError() }}</div>
    </div>
  `,
})
export class ShowErrorsComponent {
  private static readonly errorMessages: any = {
    required: (params: any) => `##FIELD## can't be blank`,

    minlength: (params: any) =>
      '##FIELD## should be minimum ' + params.requiredLength + ' characters',

    maxlength: (params: any) =>
      '##FIELD## should not be greater then ' +
      params.requiredLength +
      ' characters',

    pattern: (params: any) => 'Should be a valid',

    email: (params: any) => 'Should be valid email.',
  };

  @Input() private control:
    | AbstractControlDirective
    | AbstractControl
    | undefined;

  shouldShowErrors(): boolean {
    const result =
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
    return result || false;
  }

  listOfErrors(): string[] {
    if (this.control) {
      const control: any = this.control;
      return Object.keys(control.errors).map((field) =>
        this.getMessage(field, control.errors[field], this.control)
      );
    }
    return [];
  }

  getError(): string {
    if (this.control) {
      const control: any = this.control;
      const errors = Object.keys(control.errors).map((field) =>
        this.getMessage(field, control.errors[field], this.control)
      );

      return errors[0];
    }
    return '';
  }

  private getMessage(type: string, params: any, control: any): string {
    let fName = this.getControlName(control) || '';

    fName = fName.replace('_', ' ').replace(' id', '').toLowerCase();

    fName = fName.replace(/\b\w/g, (l) => l.toUpperCase());

    const msg: any = ShowErrorsComponent.errorMessages[type](params);

    return msg.replace('##FIELD##', fName);
  }

  getControlName(c: AbstractControl): string | null {
    const parent = c ? c.parent : null;
    if (parent) {
      const formGroup: any = parent.controls;

      return (
        Object.keys(formGroup).find((name) => c === formGroup[name]) || null
      );
    }
    return null;
  }
}
