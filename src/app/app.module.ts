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
import { TipsComponent } from './tips/tips.component';
import { AfficherTipsComponent } from './afficher-tips/afficher-tips.component';
import { AfficherTipsService } from './afficher-tips.service';
import { CreerTipsComponent } from './creer-tips/creer-tips.component';
import { CreerTipsService } from './creer-tips.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TipsComponent,
    AfficherTipsComponent,
    CreerTipsComponent,  
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
    CreerTipsService,
    AfficherTipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
