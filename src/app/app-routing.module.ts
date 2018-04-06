import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent} from './user/signin/signin.component';
import { SignupComponent} from './user/signup/signup.component';
import { UserModule } from './user/user.module';
import { WelcomeComponent} from './welcome/welcome.component';



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'signin' , component: SigninComponent , pathMatch: 'full'},
  { path: 'signup' , component: SignupComponent , pathMatch: 'full'},
   {path: 'welcome' , component: WelcomeComponent , pathMatch:'full'}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ,
  UserModule],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
