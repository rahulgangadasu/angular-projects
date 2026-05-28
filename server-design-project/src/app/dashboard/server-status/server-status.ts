import { AfterViewInit, Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    effect(() => {
      console.log('Server status changed:', this.currentStatus());
    });
  }

  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    console.log('ServerStatus component has been initialized.');
    this.interval = setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.3) {
        this.currentStatus.set('online');
      } else if (randomValue < 0.6) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('ServerStatus component has been initialized and view is ready.');
  }

  ngOnDestroy() {
    console.log('ServerStatus component is being destroyed.');
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

/* -- Alternative implementation with DestroyRef --:

  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    console.log('ServerStatus component has been initialized.');
    const interval = setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.3) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.6) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
*/
