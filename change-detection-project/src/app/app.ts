import { Component } from '@angular/core';

import { Counter } from './counter/counter';
import { Messages } from './messages/messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Counter, Messages],
})
export class App {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
