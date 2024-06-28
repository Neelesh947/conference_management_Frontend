import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavabarComponent } from './component/navabar/navabar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { CreateconferenceComponent } from './pages/admin/createconference/createconference.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { FeedbackComponent } from './pages/admin/feedback/feedback.component';
import { BookconferenceComponent } from './pages/user/bookconference/bookconference.component';
import { UserFeedbackComponent } from './pages/user/user-feedback/user-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserDashboardComponent,
    CreateconferenceComponent,
    BookingsComponent,
    FeedbackComponent,
    BookconferenceComponent,
    UserFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule, MatIconModule,
    MatMenuModule,MatCardModule,
    MatFormFieldModule,MatButtonModule,
    FormsModule,MatInputModule,MatSnackBarModule,
    HttpClientModule,MatSelectModule,
    MatDividerModule,MatDialogModule,
    MatDatepickerModule,MatTableModule,ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
