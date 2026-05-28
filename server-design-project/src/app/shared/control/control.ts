import {
  AfterContentInit,
  afterEveryRender,
  afterNextRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClickEvent = () => console.log('Control clicked!');

  constructor() {
    afterEveryRender(() => {
      console.log('afterEveryRender rendered!');
    });

    afterNextRender(() => {
      console.log('afterNextRender rendered!');
    });
  }

  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit() {
    console.log('Control content initialized!');
    console.log('Control:', this.control());
  }

  onClick() {
    console.log('Control clicked!');
    console.log('Element:', this.el);
    console.log('Control:', this.control());
  }
}
