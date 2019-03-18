import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './actions/create-user/create-user.component';
import { EditUserComponent } from './actions/edit-user/edit-user.component';
import { DeleteUserComponent } from './actions/delete-user/delete-user.component';
import { ChangePasswordComponent } from './actions/change-password/change-password.component';

@NgModule({
  declarations: [UsersComponent, CreateUserComponent, EditUserComponent, DeleteUserComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ChangePasswordComponent
  ]
})
export class UsersModule { }
