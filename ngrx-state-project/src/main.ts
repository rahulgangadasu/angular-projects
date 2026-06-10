import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { App } from './app/app';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './app/store/counter.effects';

bootstrapApplication(App, {
  providers: [provideStore({ counter: counterReducer }), provideEffects([CounterEffects])],
}).catch((err) => console.error(err));
