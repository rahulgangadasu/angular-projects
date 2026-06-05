import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) return null;
  return { doesNotContainQuestionMark: true };
}

function isEmailUnique(control: AbstractControl) {
  if (control.value !== 'rgangadasu@rivier.edu') return of(null);
  return of({ notUnique: true });
}
// To load prepopulated data from local storage after re-render
let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');
if (savedForm) {
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
}

@Component({
  selector: 'app-login-rx',
  imports: [ReactiveFormsModule],
  templateUrl: './login-rx.html',
  styleUrl: './login-rx.css',
})
export class LoginRx implements OnInit {
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [isEmailUnique],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  private destroyRef = inject(DestroyRef);

  get isEmailValid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get isPasswordValid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  ngOnInit(): void {
    // const savedForm = window.localStorage.getItem('saved-login-form');
    // if (savedForm) {
    //   const loadedForm = JSON.parse(savedForm);
    //   this.form.patchValue({ email: loadedForm.email });
    // }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }));
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    console.log(`email : ${this.form.value.email} | password : ${this.form.value.password}`);
    // this.form.reset();
  }
}
