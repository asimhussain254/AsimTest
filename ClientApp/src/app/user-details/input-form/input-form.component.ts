import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @ViewChild('form') userForm: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.resetForm();
  }

  get userData() {
    return this.userService.selectedUser;
  }

  onSubmit() {
    // Destructure value and valid properties from form object
    const { value, valid } = this.userForm;
    if (valid) {
      const isNew = this.userService.selectedUser.UserID === 0;
      const subscription = isNew
        ? this.userService.createUser(value)
        : this.userService.updateUser(this.userService.selectedUser.UserID, { ...value, UserID: null });

      subscription.subscribe(
        (res) => {
          this.resetForm();
          this.userService.getUsers();
        },
        (err) => {
          console.log(err);
        },
      );
    }
  }

  private resetForm() {
    this.userForm.reset();
    this.userService.selectedUser = {
      UserID: 0,
      Name: '',
      Email: '',
      Password: '',
      NIC: '',
      Address: '',
    };
  }
}
