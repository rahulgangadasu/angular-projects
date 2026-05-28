import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketModel } from './tickets.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModel[] = [];
  onAddTicket(ticketData: { title: string; ticketText: string }) {
    const newTicket: TicketModel = {
      id: Math.round(Math.random() * 1000),
      title: ticketData.title,
      request: ticketData.ticketText,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }

  onMarkAsCompleted(id: number) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      } else {
        return ticket;
      }
    });
  }
}
