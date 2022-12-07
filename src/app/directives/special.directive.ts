import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecial]'
})

export class SpecialDirective {

  // ElementRef grants direct access to the host DOM element
  constructor(private el: ElementRef) 
  { 
    // this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applySpecialColor('');
  }

  applySpecialColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
