import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  conference:any=[];

  constructor(private admin:AdminServiceService){}

  ngOnInit(): void {
    this.getAllConference()
  }

  getAllConference(){
    this.admin.getAllConference().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        this.conference.push(element);
      });
    })
  }

}
