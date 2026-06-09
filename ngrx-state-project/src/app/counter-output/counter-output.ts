import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { counterSelector, tripleCounterSelector } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css',
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterOutput {
  count$: Observable<number>;
  triple$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select(counterSelector);
    this.triple$ = this.store.select(tripleCounterSelector);
    // this.count$ = this.store.select('counter');
  }
}

// counter = 0;
// counterServiceSub?: Subscription;

// ngOnInit(): void {
//   this.counterServiceSub = this.counterService.counterChanged.subscribe(
//     (newVal) => (this.counter = newVal),
//   );
// }

// ngOnDestroy(): void {
//   if (this.counterServiceSub) {
//     this.counterServiceSub.unsubscribe();
//   }
// }
