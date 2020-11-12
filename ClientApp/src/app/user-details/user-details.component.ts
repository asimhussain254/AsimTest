import { Component, OnInit } from '@angular/core';
import { UserdeatilServiceService } from '../shared/userdeatil-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private service:UserdeatilServiceService) { }

  ngOnInit() {
  }

}
