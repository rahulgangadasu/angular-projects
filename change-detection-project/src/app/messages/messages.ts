import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewMessage } from './new-message/new-message';
import { MessagesList } from './messages-list/messages-list';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  imports: [MessagesList, NewMessage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Messages {
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
