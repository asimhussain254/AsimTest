import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @ViewChild('form') userForm: NgForm;

  constructor(private userService: UserService, private toastr: ToastrService) { }

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
      var subscription;
      if (isNew) {
        subscription = this.userService.createUser(value);
        this.toastr.success(`${this.userService.selectedUser.Name} is inserted.`,"Insert");
      }
      else {
        subscription = this.userService.updateUser(this.userService.selectedUser.UserID,
          { ...value, UserID: null });
          this.toastr.info(`${this.userService.selectedUser.Name} is updated.`,"Update");
      }
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
