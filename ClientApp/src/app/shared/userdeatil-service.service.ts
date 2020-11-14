import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdeatil } from './userdeatil.model';
@Injectable()
export class UserdeatilServiceService {
  formData:Userdeatil;
  readonly rootURL:'https://localhost:5001/api';
  constructor(private http:HttpClient) { }
  postUserDetail(formData:Userdeatil){
    return this.http.post('https://localhost:5001/api/User',formData);
  }
}
