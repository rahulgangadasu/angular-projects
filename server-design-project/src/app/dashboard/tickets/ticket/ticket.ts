import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketModel } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  @Input({ required: true }) data!: TicketModel;
  @Output() closed = new EventEmitter<void>();

  markAsCompleted() {
    this.closed.emit();
  }
}
