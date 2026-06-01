import { Component } from '@angular/core';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Tasks],
})
export class App {}
