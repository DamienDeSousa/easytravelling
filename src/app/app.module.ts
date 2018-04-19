import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';  
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserModule } from './user/user.module';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { SignupService } from './user/signup.service';
import { SigninService } from './user/signin.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { RechercheLieuxComponent } from './recherche-lieux/recherche-lieux.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RechercheLieuxComponent,
    DashboardComponent,
    AlertComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,                            
    ReactiveFormsModule
  ],
  providers: [
    SignupService,
    SigninService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://github.com/sachinchoolur/angular-flash