import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  entryComponents: [
    MessagesComponent
  ]
})
export class MessagesModule { }
