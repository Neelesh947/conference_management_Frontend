import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup
  hidepassword=false;

  constructor(private fb:FormBuilder,
    private auth:AuthServiceService,
    private router:Router,
    private snack:MatSnackBar){}

    ngOnInit(): void {
      this.loginForm=this.fb.group({
        username:[null,[Validators.required]],
        password:[null,[Validators.required]],
      })
    }

  login(){
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.id!==null)
      {
        const user={
          id:data.userId,
          role:data.userRoles
        }
        StorageServiceService.saveUser(user);
        StorageServiceService.saveToken(data.jwt)

        if(StorageServiceService.isAdminLoggedIn())
        {
          this.router.navigateByUrl("admin")
        }else if(StorageServiceService.isCustomerLoggedIn())
        {
          this.router.navigateByUrl("user")
        }
        else{
          this.snack.open("BAD CREDENTIALS","ok",{duration:3000})
        }

      }
    })
  }

  togglePasswordVisibility(){
    this.hidepassword=!this.hidepassword;
  }
}
