import { Component, Inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent {
  users: any;
  allComplete: boolean = false;
  currentPage: number = 1;
  totalCount: number | undefined;
  itemsPerPage: number = 10;
  totalPages: number[] = [];
  pagewiseData: any;
  constructor(private api: ApiService, public dialog: MatDialog) {

  }
  ngOnInit() {
    console.log('test');
    this.getUserList();
  }

  getUserList() {
    this.api.getUsersData().subscribe({
      next: (res) => {
        this.users = res;
        this.users.grid_data.map((user: any) => {
          user.handle = user.name.handle
          user.name = user.name.first_name + ' ' + user.name.last_name;
          user.isSelected = false;
        });
        this.totalCount = this.users.grid_data.length / this.itemsPerPage;
        for (let index = this.totalCount; index > 0; index--) {
          this.totalPages.unshift(index)
        }
        this.pagewiseData = this.users.grid_data.slice(0, 10);

      },
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    });
  }

  selectAll(completed: boolean) {
    this.allComplete = completed;
    if (this.users == undefined || this.users.grid_data == null) {
      return;
    }
    this.users.grid_data.forEach((s: any) => (s.isSelected = completed));
  }
  someComplete(): boolean {
    if (this.users == undefined || this.users.grid_data == null) {
      return false;
    }
    return this.users.grid_data.filter((s: any) => s.isSelected).length > 0 && !this.allComplete;

  }
  updateSelected() {
    this.allComplete = this.users && this.users.grid_data != null && this.users.grid_data.every((s: any) => s.isSelected);
  }

  deleteUser(id: string) {
    const dialogRef = this.dialog.open(DialogConfirm);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let index = this.users.grid_data.findIndex((it: any) => it.id == id)
        let pagewiseDataindex = this.pagewiseData.findIndex((it: any) => it.id == id)
        this.users.grid_data.splice(index, 1);
        this.pagewiseData.splice(pagewiseDataindex, 1);
      }
    });
  }
  editUser(userName: string) {
    this.dialog.open(DialogConfirm, {
      data: {
        name: userName,
      }
    });
  }
  previousPage() {
    this.currentPage--
    this.pagewiseData = this.users.grid_data.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }
  nextPage() {
    this.currentPage++;
    this.pagewiseData = this.users.grid_data.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }
  onPageChange(page: number) {
    let index = page - 1;
    this.pagewiseData = this.users.grid_data.slice(index * this.itemsPerPage, this.itemsPerPage * page);
    this.currentPage = page;
  }
}


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: 'dialog-confirm.html',
})
export class DialogConfirm {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
}