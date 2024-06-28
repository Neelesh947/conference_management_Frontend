import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-createconference',
  templateUrl: './createconference.component.html',
  styleUrl: './createconference.component.css'
})
export class CreateconferenceComponent {

  postConference!:FormGroup

  constructor(private fb:FormBuilder,
    private snack:MatSnackBar,
    private admin:AdminServiceService,
    private route:Router
){}

ngOnInit(): void {
  this.postConference=this.fb.group({
  name:[null,[Validators.required]],
  location:[null,[Validators.required]],
  localDateTime:[null,[Validators.required]]
  })
}

postConferenec(){
  this.admin.createConference(this.postConference.value).subscribe((data)=>{
    console.log(data)
    this.snack.open("Category Posted successfully","ok",{duration:3000})
      this.route.navigateByUrl("admin/dashboard")
    },(error)=>{
      this.snack.open("Error while posting car","ok",{duration:3000})
    })
}

}
