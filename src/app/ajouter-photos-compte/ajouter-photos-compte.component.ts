import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AjouterPhotosCompteService } from '../ajouter-photos-compte.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-ajouter-photos-compte',
  templateUrl: './ajouter-photos-compte.component.html',
  styleUrls: ['./ajouter-photos-compte.component.css']
})
export class AjouterPhotosCompteComponent implements OnInit {
  photo: any;
  description: string = "";
  user: any;

  constructor(private route: ActivatedRoute,
    private ajouterPhotosCompteService: AjouterPhotosCompteService,
    private alertService: AlertService,
    public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

  submit()
  {
    var types = ["image/png", "image/jpeg", "image/gif"];
    if(types.includes(this.photo[0].type))
    {
      this.route.params.subscribe(params => {
        var formData = new FormData();
        formData.append('photo', this.photo[0]);
        formData.append('description', this.description);
        formData.append('id', this.user.id);
        this.ajouterPhotosCompteService.create(formData).subscribe(res => {
          if(res.error == true)
          {
            this.alertService.error(res.message, "Une erreur est survenue...");
          }
          else
          {
            this.alertService.success(res.message, "C'est un succès !", true);
            this.router.navigate(['/profil']);
          }
        });
      });
    }
    else
    {
      this.alertService.error("La photo n'est pas au bon format.", "Une erreur est survenue...");
    }
  }

  onChange(event) {
    this.photo = event.srcElement.files;
  }
}
