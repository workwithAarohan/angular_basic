import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpecial]'
})
export class SpecialDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

}
