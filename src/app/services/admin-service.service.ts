import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageServiceService } from './storage-service.service';
import { Observable } from 'rxjs';

const base_url=["http://localhost:9012"];

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  public getAllConference()
  {
    return this.http.get(`${base_url}/admin/conference`,{
      headers:this.createAuthorizationHeader()
    })
  }

  public createConference(confernec:any){
    return this.http.post(`${base_url}/admin/conference`,confernec,{
      headers:this.createAuthorizationHeader()
    })
  }

  public getRegistrationByConference(confId:any):Observable<any>
  {
    return this.http.get(`${base_url}/admin/conference/${confId}/registration`,{
      headers:this.createAuthorizationHeader()
    })
  }

  public getFeedBackByConferences(confId:any):Observable<any>
  {
    return this.http.get(`${base_url}/admin/conference/${confId}/feedback`,{
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
