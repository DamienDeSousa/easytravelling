import { Component, OnInit } from '@angular/core';
import { AfficherPhotoService } from '../afficher-photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-afficher-photo',
  templateUrl: './afficher-photo.component.html',
  styleUrls: ['./afficher-photo.component.css']
})
export class AfficherPhotoComponent implements OnInit {
  user: any;
  photos: any;

  constructor(private afficherPhotoService: AfficherPhotoService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
    this.route.params.subscribe(params => {
      this.afficherPhotoService.getPhotos(this.user.id).subscribe(res => {
        if(res.error == true)
        {
          this.alertService.error(res.message, "Une erreur est survenue...");
        }
        else
        {
          this.photos = res.tab;
          console.log(this.photos.length);
        }
      });
    });
  }

}
