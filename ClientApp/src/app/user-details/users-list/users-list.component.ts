import { Userdeatil } from './../../shared/userdeatil.model';
import { UserdeatilServiceService } from './../../shared/userdeatil-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private service: UserdeatilServiceService) { }

  ngOnInit() {
    this.service.displayUserList();
  }
  getUser(data: Userdeatil) {
    this.service.formData = {...data};
  }
}
