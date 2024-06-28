import { Injectable } from '@angular/core';

const TOKEN="token";
const USER="user";

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  public static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }

  public static saveUser(user:any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }

  public static getToken(){
    return window.localStorage.getItem(TOKEN)
  }

  public static getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      return null;
    }
  }

  public static getUserRoles():string{
    const user=this.getUser();
    if(user==null) return "";
    return user.role;
  }

  public static isAdminLoggedIn():boolean
  {
    if(this.getToken()==null) return false;
    const role= this.getUserRoles();
    return role=="ADMIN"
  }

  public static isCustomerLoggedIn():boolean
  {
    if(this.getToken()==null) return false;
    const role= this.getUserRoles();
    return role=="USER"
  }

  public static logout():void
  {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
