import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdeatil } from './userdeatil.model';
@Injectable()
export class UserdeatilServiceService {
  formData:Userdeatil;
  userList:Userdeatil[];
  constructor(private http:HttpClient) { }
  postUserDetail(formData:Userdeatil){
    return this.http.post('https://localhost:5001/api/User',formData);
  }
  putUserDetail(formData:Userdeatil){
    return this.http.put(`https://localhost:5001/api/User/${formData.UserID}`,formData);
  }
  displayUserList(){
    this.http.get('https://localhost:5001/api/User').toPromise()
    .then(res => this.userList =res as Userdeatil[]);
  }
}
