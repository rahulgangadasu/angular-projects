import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onClickLeave($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onClickLeave(event: MouseEvent) {
    const confirmation = window.confirm(
      'You are about to leave this page. Do you want to continue?',
    );
    if (confirmation) {
      //const address = (event.target as HTMLAnchorElement).href;
      this.hostElementRef.nativeElement.href += '?from=' + this.queryParam();
      return;
    } else {
      event.preventDefault();
    }
  }
}
