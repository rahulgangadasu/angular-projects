import { Component, signal } from '@angular/core';
import { Users } from './users/users';
import { Header } from './headers/headers';

@Component({
  selector: 'app-root',
  imports: [Header, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing-project');
}
