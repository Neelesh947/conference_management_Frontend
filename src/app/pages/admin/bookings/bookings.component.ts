import { Component } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';
import { StorageServiceService } from '../../../services/storage-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings:any=[]

  constructor(private admin:AdminServiceService,
          private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.Bookings();
  }

  Bookings(){
    this.route.params.subscribe(params => {
      const id = params['confId']; 
      this.admin.getRegistrationByConference(id).subscribe((data)=>{
        this.bookings=data;
        console.log(data)
      })
    });
  }
}
