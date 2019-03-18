import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChangePasswordComponent>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

}
