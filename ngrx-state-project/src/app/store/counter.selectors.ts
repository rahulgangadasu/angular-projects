import { createSelector } from '@ngrx/store';

export const counterSelector = (state: { counter: number }) => state.counter;

// export const doubleCounterSelector = (state: { counter: number }) => state.counter * 2;

export const tripleCounterSelector = createSelector(counterSelector, (state) => state * 3);
