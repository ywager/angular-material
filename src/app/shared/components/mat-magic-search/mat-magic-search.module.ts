import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMagicSearchComponent } from './mat-magic-search.component';
import { MatMagicSearchDirective } from './directive/mat-magic-search.directive';
import { RendererService } from './services/renderer.service';

@NgModule({
  declarations: [MatMagicSearchComponent, MatMagicSearchDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [RendererService],
  exports: [MatMagicSearchComponent]
})
export class MatMagicSearchModule { }
