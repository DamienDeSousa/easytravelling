import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';  
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


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


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TipsComponent,
    AfficherTipsComponent,
    CreerTipsComponent,  
    RechercheLieuxComponent,
    DashboardComponent,
    AlertComponent,
    LieuxReglageRayonRechercheComponent,
    TrierParCategorieComponent,
    AfficherGoogleMapComponent,
    EditerProfilComponent,
    AjouterPhotosCompteComponent,
    AfficherPhotoComponent,
    AjouterLieuPartageComponent,
    AjouterLieuFavorisComponent,  
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
    AfficherPhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://github.com/sachinchoolur/angular-flash