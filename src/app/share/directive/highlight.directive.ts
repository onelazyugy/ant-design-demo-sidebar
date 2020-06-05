import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-high-light]'
})
export class HighlightDirective implements OnInit{

  // ---basic
  // constructor(private elr: ElementRef) {}
  // ngOnInit(): void {
  //   this.elr.nativeElement.style.backgroundColor = 'yellow';
  // }

  //---advance or better approach 
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
