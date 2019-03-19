import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateUserComponent } from './actions/create-user/create-user.component';
import { EditUserComponent } from './actions/edit-user/edit-user.component';
import { DeleteUserComponent } from './actions/delete-user/delete-user.component';
import { ChangePasswordComponent } from './actions/change-password/change-password.component';

import { MessagesService } from './../../../shared/components/messages/services/messages.service';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {id: 11, name: 'Oxygen2', weight: 15.9994, symbol: 'O'},
  {id: 12, name: 'Fluorine2', weight: 18.9984, symbol: 'F'},
  {id: 13, name: 'Neon2', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  choices = [
    {
      name: 'owner_alias',
      label: 'Images owned by',
      singleton: true
    },
    {
      name: 'platform',
      label: 'Platform',
      options: [
        {key: 'linux', label: 'Linux'},
        {key: 'windows', label: 'Windows'}
      ],
      singleton: true
    }
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    // default sort
    this.dataSource.sort.direction = 'asc';
    this.dataSource.sort.active = 'name';
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // table actions
  createUser(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '480px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.message.success('User ' + result.username + ' was successfully created.');
      }
    });
  }

  editUser(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '480px',
      data: {user: this.selection.selected[0]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  deleteUser(): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '480px',
      data: {user: this.selection.selected[0]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.selection.selected);
    });
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '480px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  searchUpdated(terms) {
    console.log(terms);
  }

  textSearch(customTerm) {
    console.log(customTerm);
  }

}
