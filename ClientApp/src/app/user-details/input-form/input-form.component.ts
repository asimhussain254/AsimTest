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

  constructor(private service:UserdeatilServiceService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      UserID : 0,
      Name:'',
      Email:'',
      Password:'',
      NIC : '',
      Address:''
    }
  }
  onSubmit(form:NgForm){
    this.service.postUserDetail(form.value).subscribe
     {
      res => {
        this.resetForm(form);
      }
      err => {
        console.log(err);
      }
    }
  }
}
