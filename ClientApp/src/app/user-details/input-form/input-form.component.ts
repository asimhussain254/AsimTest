import { Userdeatil } from './../../shared/userdeatil.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdeatilServiceService } from '../../shared/userdeatil-service.service';
import { Userdeatil } from '../../shared/userdeatil.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor(private service: UserdeatilServiceService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      UserID: 0,
      Name: '',
      Email: '',
      Password: '',
      NIC: '',
      Address: ''
    }
  }
  onSubmit(form: NgForm) {
    const { value,valid } = form;
    const isNew =this.service.formData.UserID === 0;
    if (valid) {
      if (isNew) {
        this.insertUser(value);
      }
      else {
        value.UserID=this.service.formData.UserID;
        this.updateUser(value);
      }
    }

  }
  insertUser(value: NgForm) {
    this.service.postUserDetail(value.value).subscribe(
      res => {
        this.resetForm(value);
      },
      err => {
        console.log(err);
      }
    )
  }
  updateUser(form: NgForm) {
    this.service.putUserDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }
}
