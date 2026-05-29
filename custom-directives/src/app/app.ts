import { Component, computed, inject } from '@angular/core';
import { Auth } from './auth/auth';
import { Resources } from './resources/resources';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth-directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Auth, Resources, AuthDirective],
})
export class App {
  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
