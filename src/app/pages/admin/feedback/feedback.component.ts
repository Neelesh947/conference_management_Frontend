import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedback:any=[]

  constructor(private admin:AdminServiceService,
    private route:ActivatedRoute
){}

ngOnInit(): void {
  this.Bookings();
}

Bookings(){
  this.route.params.subscribe(params => {
    const id = params['confId']; 
    this.admin.getFeedBackByConferences(id).subscribe((data)=>{
      this.feedback=data;
      console.log(data)
    })
  });
}
}
