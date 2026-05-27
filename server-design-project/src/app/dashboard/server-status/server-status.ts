import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';

  ngOnInit() {
    setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.3) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.6) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
