import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent} from './user/signin/signin.component';
import { SignupComponent} from './user/signup/signup.component';
import { UserModule } from './user/user.module';
import { WelcomeComponent} from './welcome/welcome.component';

import { TipsComponent} from './tips/tips.component';
import { AfficherTipsComponent} from './afficher-tips/afficher-tips.component';
import { CreerTipsComponent} from './creertips/creertips.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheLieuxComponent } from './recherche-lieux/recherche-lieux.component';




const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'signin' , component: SigninComponent , pathMatch: 'full'},
  { path: 'tips' , component: TipsComponent , pathMatch: 'full'},
  { path: 'signup' , component: SignupComponent , pathMatch: 'full'},
  { path: 'welcome' , component: WelcomeComponent , pathMatch:'full'},
  { path: 'newTips' , component: CreerTipsComponent , pathMatch:'full'},
  { path: 'tips/:lieu' , component: AfficherTipsComponent , pathMatch: 'full'},
  { path: 'recherche-lieux', component: RechercheLieuxComponent, pathMatch: 'full'}

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ,
  UserModule],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
