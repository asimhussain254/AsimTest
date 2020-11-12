import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdeatil } from './userdeatil.model';
@Injectable()
export class UserdeatilServiceService {
  formData:Userdeatil;
  readonly rootURL:'https://localhost:44381/api';
  constructor(private http:HttpClient) { }
  postUserDetail(formData:Userdeatil){
    return this.http.post(this.rootURL+'/User',formData);
  }
}
