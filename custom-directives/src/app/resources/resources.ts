import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.html',
  styleUrl: './resources.css',
  standalone: true,
  imports: [SafeLinkDirective],
})
export class Resources {}
