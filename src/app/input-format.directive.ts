import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  @Input('format') format;

  @HostListener('blur') onBlur(){
   const value: string = this.el.nativeElement.value;

   if (this.format == 'lowercase') {
  this.el.nativeElement.value = value.toLocaleLowerCase();
}
   else {
     this.el.nativeElement.value = value.toUpperCase();
   }
  }

  @HostListener('focus') onFocus() {
    console.log('On Focus');
  }
}
