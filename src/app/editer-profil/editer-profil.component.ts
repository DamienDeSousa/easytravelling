import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditerProfilService } from '../editer-profil.service';
import { AlertService } from '../alert.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editer-profil',
  templateUrl: './editer-profil.component.html',
  styleUrls: ['./editer-profil.component.css']
})
export class EditerProfilComponent implements OnInit {
  email: string = "";
  oldPasswd: string = "";
  newPasswd: string = "";
  user: any;

  constructor(private route: ActivatedRoute,
              private editerProfilService: EditerProfilService,
              private alertService: AlertService,
              public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

  changeEmail()
  {
    this.route.params.subscribe(params => {
      this.editerProfilService.editEmail(this.email, this.user.id).subscribe(res => {
        if(res.error == true)
        {
          this.alertService.error(res.message, "Une erreur est survenue...");
        }
        else
        {
          this.user = res;
          sessionStorage.setItem('utilisateur', this.user);
          this.alertService.success("Votre email a bien été mis à jour.", "Modification réussie !");
        }
      });
    });
  }

  changePasswd()
  {
    if(this.user.passwd.localeCompare(this.oldPasswd) == 0)
    {
      this.route.params.subscribe(params => {
        this.editerProfilService.editPasswd(this.newPasswd, this.user.id).subscribe(res => {
          if(res.error == true)
          {
            this.alertService.error(res.message, "Une erreur est survenue...");
          }
          else
          {
            this.user = res;
            sessionStorage.setItem('utilisateur', this.user);
            this.alertService.success("Votre mot de passe a bien été mis à jour.", "Modification réussie !");
          }
        });
      });
    }
    else
    {
      this.alertService.error("L'ancien mot de passe est incorrect.", "Une erreur est survenue...");
    }
  }

  redirectAjouterPhotos()
  {
    this.router.navigate(['/profil/photos']);
  }
}
