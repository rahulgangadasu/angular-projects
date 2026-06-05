import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-rx',
  imports: [ReactiveFormsModule],
  templateUrl: './login-rx.html',
  styleUrl: './login-rx.css',
})
export class LoginRx {
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    console.log(`email : ${this.form.value.email} | password : ${this.form.value.password}`);
  }
}
