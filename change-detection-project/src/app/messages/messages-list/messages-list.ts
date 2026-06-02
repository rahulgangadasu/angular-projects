import { ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { MessagesService } from '../messages-service';

@Component({
  selector: 'app-messages-list',
  imports: [],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
})
export class MessagesList {
  private messagesService = inject(MessagesService);
  get messages() {
    return this.messagesService.allMessages;
  }

  private changeDetectorRef = inject(ChangeDetectorRef);

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
