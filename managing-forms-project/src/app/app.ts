import { Component, signal } from '@angular/core';
import { Login } from './auth/login/login';
import { LoginRx } from './auth/login-rx/login-rx';

@Component({
  selector: 'app-root',
  imports: [LoginRx],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('managing-forms-project');
}
