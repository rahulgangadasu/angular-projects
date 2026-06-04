import { Component, inject, input } from '@angular/core';
import { Modal } from '../modal';
import { ErrorService } from '../../error.service';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  templateUrl: './error-modal.html',
  styleUrl: './error-modal.css',
  imports: [Modal],
})
export class ErrorModal {
  title = input<string>();
  message = input<string>();
  private errorService = inject(ErrorService);

  onClearError() {
    this.errorService.clearError();
  }
}
