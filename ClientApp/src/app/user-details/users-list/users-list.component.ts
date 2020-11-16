import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  get users() {
    return this.userService.userList;
  }

  setUser(user: IUser) {
    this.userService.selectedUser = { ...user };
  }

  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete the user?')) {
      this.userService.deleteUser(user.UserID).subscribe(
        res => {
          this.userService.getUsers();
          this.toastr.warning(`${user.Name} is deleted.`,"Delete");
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
