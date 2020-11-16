import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';
import { ToastService } from './../../toast.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @ViewChild('form') userForm: NgForm;

  constructor(private userService: UserService, private toastService: ToastService) { }

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
      }
      else {
        subscription = this.userService.updateUser(this.userService.selectedUser.UserID,
          { ...value, UserID: null });
      }
      subscription.subscribe(
        (res) => {
          this.resetForm();
          this.userService.getUsers();
          // this.toastr.success(`Record is updated.`,"Success")
        },
        (err) => {
          console.log(err);
          this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
          // this.toastr.error("There is error occured.","Error");
        },
      );
    }
  }
  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
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
