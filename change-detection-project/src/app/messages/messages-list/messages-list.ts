import { Component, inject } from '@angular/core';
import { MessagesService } from '../messages-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [AsyncPipe],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
})
export class MessagesList {
  private messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
