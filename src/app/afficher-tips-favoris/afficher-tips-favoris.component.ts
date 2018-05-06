import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { URLSearchParams} from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AfficherTipsFavorisService } from '../afficher-tips-favoris.service';
import {AfficherTipsComponent} from '../afficher-tips/afficher-tips.component';

@Component({
  selector: 'app-afficher-tips-favoris',
  templateUrl: './afficher-tips-favoris.component.html',
  styleUrls: ['./afficher-tips-favoris.component.css']
})
export class AfficherTipsFavorisComponent implements OnInit {

  utilisateur;
  jsonObjt = {};
  idTips = 0;

  public listeLikedTipsUtilisateur = [];
  constructor(private route: ActivatedRoute,
              private location: Location,
              private afficherTipsFavorisService: AfficherTipsFavorisService,
              public router: Router) { }

  ngOnInit() {
    this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
    this.route.params.subscribe(params => {
      this.afficherTipsFavorisService.getLikedTips(this.utilisateur.id).subscribe(res => this.jsonObjt = res);

      if (this.utilisateur != null) {

        this.afficherTipsFavorisService.getLikedTips(this.utilisateur.id).subscribe(data => {
          while (this.listeLikedTipsUtilisateur.length > 0) {
            this.listeLikedTipsUtilisateur.pop();
          }

          for (let i = 0 ; i < data.tab.length; i++) {
            this.idTips = (data.tab[i].id);
            this.listeLikedTipsUtilisateur.push(this.idTips);
          }
          console.log(this.listeLikedTipsUtilisateur);
        });
      }
  });
}
}
