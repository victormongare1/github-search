import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private elem:ElementRef){

    this.elem.nativeElement.style.color="blue"
    this.elem.nativeElement.style.backgroundColor="red"
    

    
    }
}