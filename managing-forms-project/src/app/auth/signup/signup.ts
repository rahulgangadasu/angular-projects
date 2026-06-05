import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function mustContainThese(control: AbstractControl) {
  if (control.value.includes('!') || control.value.includes('@')) {
    return null;
  }
  return { mustContainThese: true };
}

function equalInput(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (password === confirmPassword) {
    return null;
  }
  return { equalInput: true };
}

enum roles {
  student = 'student',
  teacher = 'teacher',
  employee = 'employee',
  founder = 'founder',
  other = 'other',
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(8), mustContainThese],
        }),

        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(8), mustContainThese],
        }),
      },
      { validators: [equalInput], asyncValidators: [] },
    ),

    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),

    address: new FormGroup({
      street: new FormControl('', { validators: [Validators.required] }),
      number: new FormControl('', { validators: [Validators.required] }),
      postalCode: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),
    }),

    role: new FormControl<roles>(roles.student, { validators: [Validators.required] }),

    source: new FormArray([new FormControl(false), new FormControl(false), new FormControl(false)]),

    agree: new FormControl(false, { validators: [Validators.required] }),
  });

  get isEmailValid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get isPasswordValid() {
    return (
      this.form.controls.passwords.touched &&
      this.form.controls.passwords.dirty &&
      this.form.controls.passwords.invalid
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('invalid form');
      return;
    }
    console.log(this.form);
    console.log(`email : ${this.form.value.email} | password : ${this.form.value.passwords}`);
  }

  onReset() {
    this.form.reset();
  }
}
