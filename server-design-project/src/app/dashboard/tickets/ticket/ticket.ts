import { Component, input, output, signal } from '@angular/core';
import { TicketModel } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketModel>();
  closed = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((previousVisible) => !previousVisible);
    // Angular passes the previous value from signal.
  }

  onMarkAsCompleted() {
    this.closed.emit();
  }
}
