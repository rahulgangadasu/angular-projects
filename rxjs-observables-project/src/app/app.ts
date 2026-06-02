import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = interval(5000)
      .pipe(map((value) => value * 2)) //modifies the emmited observable value and returns the value
      .subscribe({
        next: (value) => console.log(`Emitted value: ${value}`),
        complete: () => console.log('Observable completed.'),
        error: (err) => console.error('Observable error:', err),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
