import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {

  isCustomerLoggedIn:boolean=StorageServiceService.isCustomerLoggedIn();
  isAdminLoggedIn:boolean=StorageServiceService.isAdminLoggedIn();

  userRoles: string[] = [];

  constructor(private route: Router) {}
  
  ngOnInit(): void {
    this.route.events.subscribe(event=>{
      this.isAdminLoggedIn=StorageServiceService.isAdminLoggedIn();
      this.isCustomerLoggedIn=StorageServiceService.isCustomerLoggedIn();
    })
  }

  logout(){
    StorageServiceService.logout();
    this.route.navigateByUrl('login');
  }
}
