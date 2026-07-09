import { Component, input } from '@angular/core';
import { Modal } from '../modal';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [Modal],
  template: `
    <app-modal>
      <h2>{{ title() }}</h2>
      <p>{{ message() }}</p>
    </app-modal>
  `,
})
export class ErrorModal {
  readonly title = input('');
  readonly message = input('');
}
