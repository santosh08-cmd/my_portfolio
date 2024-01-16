import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImghover]'
})
export class ImghoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter')onmouseenter(){
    this.renderer.addClass(this.element.nativeElement,'imgsize');
  }

  @HostListener('mouseout')onmouseouter(){
    this.renderer.removeClass(this.element.nativeElement,'imgsize');
  }

}
