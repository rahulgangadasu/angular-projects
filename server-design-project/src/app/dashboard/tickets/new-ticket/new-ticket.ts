import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //@Output() addTicket = new EventEmitter<{ title: string; ticketText: string }>();

  addTicket = output<{ title: string; ticketText: string }>();

  enteredTitle = '';
  enteredTicketText = '';

  ngOnInit() {
    console.log('NewTicket initialized!');
    console.log('Form:', this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('NewTicket view initialized!');
    console.log('Form:', this.form?.nativeElement);
  }

  onSubmit() {
    this.addTicket.emit({ title: this.enteredTitle, ticketText: this.enteredTicketText });
    //this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredTicketText = '';
  }
}
