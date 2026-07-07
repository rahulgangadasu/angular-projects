import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  @Output() addTicket = new EventEmitter<{ title: string; ticketText: string }>();

  title = '';
  ticketText = '';

  onSubmit() {
    const trimmedTitle = this.title.trim();
    const trimmedText = this.ticketText.trim();

    if (!trimmedTitle && !trimmedText) {
      return;
    }

    this.addTicket.emit({
      title: trimmedTitle,
      ticketText: trimmedText,
    });

    this.title = '';
    this.ticketText = '';
  }
}
