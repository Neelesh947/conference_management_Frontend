import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { CreateconferenceComponent } from './pages/admin/createconference/createconference.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { FeedbackComponent } from './pages/admin/feedback/feedback.component';
import { UserFeedbackComponent } from './pages/user/user-feedback/user-feedback.component';
import { BookconferenceComponent } from './pages/user/bookconference/bookconference.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:"admin",
    component:AdminHomeComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"create",
        component:CreateconferenceComponent
      },
      {
        path:"list/:confId",
        component:BookingsComponent
      },
      {
        path:"feed/:confId",
        component:FeedbackComponent
      }
    ]
  },
  {
    path:"user",
    component:UserHomeComponent,
    children:[
      {
        path:"dashboard",
        component:UserDashboardComponent
      },
      {
        path:"feedback",
        component:UserFeedbackComponent
      },
      {
        path:"book",
        component:BookconferenceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
