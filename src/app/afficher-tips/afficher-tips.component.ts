import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams} from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AfficherTipsService } from '../afficher-tips.service';
//import { AfficherTipsFavorisComponent } from '../afficher-tips-favoris/afficher-tips-favoris.component';
//import { LikeTipsComponent } from '../like-tips/like-tips.component';


@Component({
  selector: 'app-afficher-tips',
  templateUrl: './afficher-tips.component.html',
  styleUrls: ['./afficher-tips.component.css']
})
export class AfficherTipsComponent implements OnInit {

  jsonObj = {};
  jsonObjT = Object;
  utilisateur;
  idTips = 0;

  public listeLikedTipsUtilisateur = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private afficherTipsService: AfficherTipsService,
              public router: Router) { }

  ngOnInit() {

  	this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
  	this.route.params.subscribe(params => {
    //  console.log(params.lieu);
  		this.afficherTipsService.getTips(params.lieu ,"date").subscribe(res =>  this.jsonObj = res);

      if (this.utilisateur != null) {

        this.afficherTipsService.getLikedTips(this.utilisateur.id).subscribe(data => {
          while (this.listeLikedTipsUtilisateur.length > 0) {
            this.listeLikedTipsUtilisateur.pop();
          }

          for (let i = 0 ; i < data.tab.length; i++) {
            this.idTips = (data.tab[i].id);
            this.listeLikedTipsUtilisateur.push(this.idTips);
          }
          console.log(this.listeLikedTipsUtilisateur);
          console.log(this.utilisateur.id);
        });
      }
	});
 }


 LikedTips(idUtilisateur:number) {
   this.route.params.subscribe(params => {
     this.afficherTipsService.getLikedTips(this.utilisateur.id).subscribe(res => this.jsonObj = res);
   });
 }


 sort(sortedBy: string): void {
   this.route.params.subscribe(params => {
     this.afficherTipsService.getTips(params.lieu , sortedBy).subscribe(res => this.jsonObj = res);
   });
 }

 Like(id_tips:number , id_utilisateur:number ,note_tips:number) {
   this.route.params.subscribe(params => {
     console.log("like");
     this.afficherTipsService.Like(id_tips , id_utilisateur , note_tips).subscribe(res =>this.ngOnInit());
    //  location.reload();
   });

 }

 Dislike(id_tips:number , id_utilisateur:number , note_tips:number) {
   this.route.params.subscribe(params => {
     console.log("dislike");
     this.afficherTipsService.Dislike(id_tips , id_utilisateur , note_tips).subscribe(res => this.ngOnInit());
   });
//   location.reload();
}

 Delete (id_tips:number) {
    this.route.params.subscribe(params => {
       this.afficherTipsService.Delete(id_tips).subscribe(res => this.ngOnInit());
   });
 }


}
