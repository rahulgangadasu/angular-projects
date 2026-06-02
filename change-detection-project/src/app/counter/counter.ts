import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { InfoMessage } from '../info-message/info-message';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  imports: [InfoMessage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter implements OnInit {
  count = signal(0);
  private zone = inject(NgZone);

  ngOnInit() {
    setTimeout(() => {
      console.log('[Counter] Updating count to 0 after 4 seconds.');
      this.count.set(0);
    }, 4000);

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Running after 8 seconds (outside Angular zone).');
      }, 8000);
    });
  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
