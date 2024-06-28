import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageServiceService } from './storage-service.service';

const base_url=["http://localhost:9012"];

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public getAllConference()
  {
    return this.http.get(`${base_url}/customer/conference`,{
      headers:this.createAuthorizationHeader()
    })
  }

  public bookConference(register:any)
  {
    return this.http.post(`${base_url}/customer/register`,register,{
      headers:this.createAuthorizationHeader()
    })
  }

  public giveFeedback(feedback:any)
  {
    return this.http.post(`${base_url}/customer/feedback`,feedback,{
      headers:this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageServiceService.getToken()
    )
  }
}
