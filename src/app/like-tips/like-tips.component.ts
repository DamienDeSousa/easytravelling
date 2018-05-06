import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams} from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LikeTipsService } from '../like-tips.service';

@Component({
  selector: 'app-like-tips',
  templateUrl: './like-tips.component.html',
  styleUrls: ['./like-tips.component.css']
})
export class LikeTipsComponent implements OnInit {
@Input('tips') tipsid: number;

    user;
    public listeLikedTipsUtilisateur = [];
    idTips = 0;

  constructor( private route: ActivatedRoute,
              private location: Location,
              private likeTipsService: LikeTipsService,
              public router: Router ) { }

              ngOnInit() {

                this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
                console.log(this.user.id);
                    this.likeTipsService.getLikedTips(this.user.id).subscribe(data => {
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





  Like(id_tips:number , id_utilisateur:number ,note_tips:number) {
    this.route.params.subscribe(params => {
      console.log("like");
      this.likeTipsService.Like(id_tips , id_utilisateur , note_tips).subscribe(res =>this.ngOnInit());
    });

  }

  Dislike(id_tips:number , id_utilisateur:number , note_tips:number) {
    this.route.params.subscribe(params => {
      console.log("dislike");
      this.likeTipsService.Dislike(id_tips , id_utilisateur , note_tips).subscribe(res => this.ngOnInit());
    });
}

}
