import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('deferrable-views-project');
}
