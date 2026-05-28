export interface TicketModel {
  id: number;
  title: string;
  request: string;
  status: 'open' | 'in_progress' | 'closed';
}
