import { Component, signal } from '@angular/core';
import { CounterOutput } from './counter-output/counter-output';
import { CounterControls } from './counter-controls/counter-controls';

@Component({
  selector: 'app-root',
  imports: [CounterOutput, CounterControls],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngrx-state-project');
}
