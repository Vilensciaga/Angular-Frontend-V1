import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHldir]'
})
export class HldirDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.applyBC(null);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.applyBC(null);
  }

  constructor(private el: ElementRef) {
   
   }



   applyBC(color:string|null){
      this.el.nativeElement.style.backgroundColor = color;
   }
  
}
