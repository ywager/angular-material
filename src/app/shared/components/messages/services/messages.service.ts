import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MessagesComponent } from './../messages.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private matSnackBar: MatSnackBar
  ) { }
  success(message: string, time = 30000) {
    const config = {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'success',
      duration: time,
      data: {
        content: message
      }
    };
    return this.matSnackBar.openFromComponent(MessagesComponent, config);
  }

  error(message: string, time = 30000) {
    const config = {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'error',
      duration: time,
      data: {
        content: message
      }
    };
    return this.matSnackBar.openFromComponent(MessagesComponent, config);
  }
}
