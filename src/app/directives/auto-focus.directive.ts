import { Directive, Input, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[auto-focus]'
})
export class AutoFocusDirective {
 
  @Input() public appAutoFocus: boolean;

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {
      console.log(this.appAutoFocus);
      setTimeout(() => {
        if(this.appAutoFocus){
          this.el.nativeElement.focus();
        }

      }, 500);

  }
}
