import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent} from './user/signin/signin.component';
import { SignupComponent} from './user/signup/signup.component';
import { UserModule } from './user/user.module';
import { WelcomeComponent} from './welcome/welcome.component';
<<<<<<< HEAD
import { TipsComponent} from './tips/tips.component';
import { AfficherTipsComponent} from './afficher-tips/afficher-tips.component';
import { CreerTipsComponent} from './creer-tips/creer-tips.component';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheLieuxComponent } from './recherche-lieux/recherche-lieux.component';
>>>>>>> eb6e6b8a7763fc49d7702ced31f9cd5c5dbc6b7f



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'signin' , component: SigninComponent , pathMatch: 'full'},
  { path: 'tips' , component: TipsComponent , pathMatch: 'full'},
  { path: 'signup' , component: SignupComponent , pathMatch: 'full'},
  { path: 'welcome' , component: WelcomeComponent , pathMatch:'full'},
<<<<<<< HEAD
  { path: 'newTips' , component: CreerTipsComponent , pathMatch:'full'},
  { path: 'tips/:lieu' , component: AfficherTipsComponent , pathMatch: 'full'}
=======
  { path: 'recherche-lieux', component: RechercheLieuxComponent, pathMatch: 'full'}
>>>>>>> eb6e6b8a7763fc49d7702ced31f9cd5c5dbc6b7f
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ,
  UserModule],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
