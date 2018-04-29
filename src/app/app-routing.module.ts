import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent} from './user/signin/signin.component';
import { SignupComponent} from './user/signup/signup.component';
import { UserModule } from './user/user.module';
import { WelcomeComponent} from './welcome/welcome.component';
import { TipsComponent} from './tips/tips.component';
import { AfficherTipsComponent} from './afficher-tips/afficher-tips.component';
import { CreerTipsComponent} from './creer-tips/creer-tips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheLieuxComponent } from './recherche-lieux/recherche-lieux.component';
import { EditerProfilComponent } from './editer-profil/editer-profil.component';
import { AjouterPhotosCompteComponent } from './ajouter-photos-compte/ajouter-photos-compte.component';
import { AjouterLieuPartageComponent } from './ajouter-lieu-partage/ajouter-lieu-partage.component';
import { AVisitePlusTardComponent } from './a-visite-plus-tard/a-visite-plus-tard.component';



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'signin' , component: SigninComponent , pathMatch: 'full'},
  { path: 'tips' , component: TipsComponent , pathMatch: 'full'},
  { path: 'signup' , component: SignupComponent , pathMatch: 'full'},
  { path: 'welcome' , component: WelcomeComponent , pathMatch:'full'},
  { path: 'newTips' , component: CreerTipsComponent , pathMatch:'full'},
  { path: 'tips/:lieu' , component: AfficherTipsComponent , pathMatch: 'full'},
  { path: 'recherche-lieux', component: RechercheLieuxComponent, pathMatch: 'full'},
  { path: 'profil', component: EditerProfilComponent, pathMatch: 'full'},
  { path: 'profil/photos', component: AjouterPhotosCompteComponent, pathMatch: 'full'},
  { path: 'profil/partager-lieux', component: AjouterLieuPartageComponent, pathMatch: 'full'},
  { path: 'profil/visiter-plus-tard', component: AVisitePlusTardComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ,
  UserModule],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
