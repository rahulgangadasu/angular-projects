import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})
export class CounterControls {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
