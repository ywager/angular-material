import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMagicSearchComponent } from './mat-magic-search.component';
import { MatMagicSearchDirective } from './directive/mat-magic-search.directive';
import { RendererService } from './services/renderer.service';

@NgModule({
  declarations: [MatMagicSearchComponent, MatMagicSearchDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RendererService],
  exports: [MatMagicSearchComponent]
})
export class MatMagicSearchModule { }
