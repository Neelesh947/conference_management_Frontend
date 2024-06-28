import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { StorageServiceService } from '../../../services/storage-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  conference:any=[];

  conferenceId:String=this.route.snapshot.params["confId"];
  users=StorageServiceService.getUser();

  constructor(private user:UserServiceService,
            private route:ActivatedRoute,
            private snack:MatSnackBar
  ){}


  ngOnInit(): void {
    this.getAllConference()
  }

  getAllConference(){
    this.user.getAllConference().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        this.conference.push(element);
      });
    })
  }

  bookConference(confId:number){
    const route={
      email: this.users.email,
      name: this.users.name,
      conference:{
        confId: confId
      }
    }

    console.log(route)
  }

  feedback(){}
}
