import { Component, OnInit } from '@angular/core';

import { IUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }

  get users() {
    return this.userService.userList;
  }

  setUser(data: IUser) {
    this.userService.selectedUser = { ...data };
  }

  deleteUser(user: IUser) {}
}
