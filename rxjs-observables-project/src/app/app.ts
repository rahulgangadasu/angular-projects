import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount); // Converts the signal to an observable
  // that emits whenever the signal value changes
  interval$ = interval(3000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0, manualCleanup: true }); // Converts the observable to a signal
  // that updates with the latest emitted value

  customInterval$ = new Observable((subscriber) => {
    let timesEmitted = 0;
    const interval = setInterval(() => {
      //subscriber.error(); // Emits an error to demonstrate error handling in the observable
      if (timesEmitted >= 5) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value from custom interval observable');
      subscriber.next({
        message: 'new value emitted',
      });
      timesEmitted++;
    }, 3000);
  });

  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log('clickCount value changed:', this.clickCount());
    // });
  }

  ngOnInit() {
    // const subscription = interval(5000)
    //   .pipe(map((value) => value * 2)) //modifies the emmited observable value and returns the value
    //   .subscribe({
    //     next: (value) => console.log(`Emitted value: ${value}`),
    //     complete: () => console.log('Observable completed.'),
    //     error: (err) => console.error('Observable error:', err),
    //   });

    this.customInterval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Custom interval completed.'),
    });

    const subscription = this.clickCount$.subscribe({
      next: (value) => console.log(`clickCount value changed: ${this.clickCount()}`),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((value) => value + 1);
  }
}
