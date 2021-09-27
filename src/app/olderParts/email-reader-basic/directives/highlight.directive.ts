import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('focus') onFocus() {
    this.highlight('#f0f0f0');
  }

  @HostListener('blur') onBlur() {
    this.highlight("");
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
