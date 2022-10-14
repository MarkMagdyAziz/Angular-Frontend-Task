import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HoverShadow]',
})
export class HoverDirective {
  // decorator
  @Input('HoverShadow') borderColor: string = 'red';

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = `2px solid ${this.borderColor}`;
  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid green`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.borderColor}`;
  }
}
