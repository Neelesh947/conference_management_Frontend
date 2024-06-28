import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signupForm!: FormGroup
  hidepassword=true;

  constructor(private fb:FormBuilder,
        private snack:MatSnackBar,
        private auth:AuthServiceService,
        private router:Router){}

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  register(){
    console.log(this.signupForm.value)
    this.auth.createUser(this.signupForm).subscribe((data:any)=>{
      this.snack.open("User created successfully","ok")
    })
  }
}
