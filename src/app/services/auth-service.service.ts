import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url=["http://localhost:9012"];

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http:HttpClient) { }

  public login(loginRequest:any)
  {
    return this.http.post(`${base_url}/user/login`,loginRequest)
  }

  public createUser(loginRequest:any){
    return this.http.post(`${base_url}/user/create-user`,loginRequest)
  }
}
