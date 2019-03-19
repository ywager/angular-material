import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';
import { RendererService } from './../services/renderer.service';

@Directive({
  selector: '[appMatMagicSearch]'
})
export class MatMagicSearchDirective implements OnChanges {

  @Input() focusEvent: boolean;

  constructor(private el: ElementRef, private renderer: RendererService) { }

  ngOnChanges() {
    if (this.focusEvent) {
      this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
    }
  }
}
