import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
//import { UserModule } from './user/user.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';
import { SigninService } from './signin.service';
import { WelcomeComponent } from './welcome/welcome.component';

import { TipsComponent } from './tips/tips.component';
import { AfficherTipsComponent } from './afficher-tips/afficher-tips.component';
import { AfficherTipsService } from './afficher-tips.service';
import { CreerTipsComponent } from './creertips/creertips.component';
import { CreerTipsService } from './creer-tips.service';

import { RechercheLieuxComponent } from './recherche-lieux/recherche-lieux.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import { LieuxReglageRayonRechercheComponent } from './lieux-reglage-rayon-recherche/lieux-reglage-rayon-recherche.component';
import { TrierParCategorieComponent } from './trier-par-categorie/trier-par-categorie.component';
import { AfficherGoogleMapComponent } from './afficher-google-map/afficher-google-map.component';
import { TrierParCategorieService } from './trier-par-categorie.service';
import { EditerProfilComponent } from './editer-profil/editer-profil.component';
import { EditerProfilService } from './editer-profil.service';
import { AjouterPhotosCompteComponent } from './ajouter-photos-compte/ajouter-photos-compte.component';
import { AjouterPhotosCompteService } from './ajouter-photos-compte.service';
import { AfficherPhotoComponent } from './afficher-photo/afficher-photo.component';
import { AfficherPhotoService } from './afficher-photo.service';
import { AjouterLieuPartageComponent } from './ajouter-lieu-partage/ajouter-lieu-partage.component';
import { AjouterLieuFavorisComponent } from './ajouter-lieu-favoris/ajouter-lieu-favoris.component';
import { PartagerLieuxDejaVisiteComponent } from './partager-lieux-deja-visite/partager-lieux-deja-visite.component';
import { AVisitePlusTardComponent } from './a-visite-plus-tard/a-visite-plus-tard.component';
import { AVisitePlusTardService } from './a-visite-plus-tard.service';
import { VoirAutresProfilsComponent } from './voir-autres-profils/voir-autres-profils.component';
import { AfficherInfosUserComponent } from './afficher-infos-user/afficher-infos-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent,

    TipsComponent,
    AfficherTipsComponent,
    CreerTipsComponent,

    RechercheLieuxComponent,
    DashboardComponent,
    AlertComponent,
    LieuxReglageRayonRechercheComponent,
    TrierParCategorieComponent,
    AfficherGoogleMapComponent,
    CreerTipsComponent,
    EditerProfilComponent,
    AjouterPhotosCompteComponent,
    AfficherPhotoComponent,
    AjouterLieuPartageComponent,
    AjouterLieuFavorisComponent,
    PartagerLieuxDejaVisiteComponent,
    AVisitePlusTardComponent,
    VoirAutresProfilsComponent,
    AfficherInfosUserComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNwS-CojeS-2pH8c7cOpiuHuoLCGzUjUc',
      libraries: ['places']
    })
  ],
  providers: [
    SignupService,
    SigninService,
    CreerTipsService,
    AfficherTipsService,
    AlertService,
    TrierParCategorieService,
    EditerProfilService,
    AjouterPhotosCompteService,
    AfficherPhotoService,
    AVisitePlusTardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://github.com/sachinchoolur/angular-flash
