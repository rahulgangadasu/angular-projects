import { inject, Injectable } from '@angular/core';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { decrement, increment, init, set } from './counter.actions';
import { Store } from '@ngrx/store';
import { counterSelector } from './counter.selectors';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<{ counter: number }>);

  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedValue = localStorage.getItem('counter');
        return of(set({ value: storedValue ? +storedValue : 0 }));
      }),
    ),
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(counterSelector)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('counter', counter.toString());
        }),
      ),
    { dispatch: false },
  );
}
