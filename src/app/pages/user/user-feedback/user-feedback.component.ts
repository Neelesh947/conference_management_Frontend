import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.css'
})
export class UserFeedbackComponent implements OnInit{
  feedbackForm!: FormGroup

  constructor(private user:UserServiceService,
          private route:ActivatedRoute,
          private fb:FormBuilder,
          private snack:MatSnackBar,
          private routes:Router
  ){}

  ngOnInit(): void {
    this.feedbackForm=this.fb.group({
      comments:[null,[Validators.required]],
      ratings:[null,[Validators.required]],
    })
  }  
  
  feedback()
  {
    console.log(this.feedbackForm)
    this.route.params.subscribe(params => {
      const id = params['confId']; 

      const feedbackData = {
        comments: this.feedbackForm.get('comments')?.value,
        ratings: this.feedbackForm.get('ratings')?.value,
        conferences: {
          confId: id
        }
      };
      
    this.user.giveFeedback(feedbackData).subscribe(data=>{
      console.log(data)
      this.snack.open("posted successfully","ok")
      this.routes.navigateByUrl("/user/dashboard");   
    })

    })
  }


}
