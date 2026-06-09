import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { App } from './app/app';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(App, {
  providers: [provideStore({ counter: counterReducer })],
}).catch((err) => console.error(err));
