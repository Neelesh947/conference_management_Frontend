import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookconference',
  templateUrl: './bookconference.component.html',
  styleUrl: './bookconference.component.css'
})
export class BookconferenceComponent {

  bookConference!: FormGroup

  constructor(private user:UserServiceService,
          private route:ActivatedRoute,
          private fb:FormBuilder,
          private router:Router,
          private snack:MatSnackBar
  ){}

  ngOnInit(): void {
    this.bookConference=this.fb.group({
      email:[null,[Validators.required]],
      name:[null,[Validators.required]],
    })
  }  
  
  feedback()
  {
    this.route.params.subscribe(params => {
      const id = params['confId']; 

      const feedbackData = {
        email: this.bookConference.get('email')?.value,
        name: this.bookConference.get('name')?.value,
        conferences: {
          confId: id
        }
      };
      
    this.user.bookConference(feedbackData).subscribe(data=>{
      console.log(data)
      this.snack.open("posted successfully","ok")
      this.router.navigateByUrl("/user/dashboard");    
    })

    })
  }
}
