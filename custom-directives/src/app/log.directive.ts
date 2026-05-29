import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLogDirective]',
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  onLog() {
    console.log('clicked');
    console.log(this.elementRef.nativeElement);
  }
}
