import { Component, OnInit , Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams} from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SupprimerTipsService } from '../supprimer-tips.service';

@Component({
  selector: 'app-supprimer-tips',
  templateUrl: './supprimer-tips.component.html',
  styleUrls: ['./supprimer-tips.component.css']
})
export class SupprimerTipsComponent implements OnInit {
  @Input('tips') tipsid: number;

  user;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private supprimerTipsService: SupprimerTipsService,
              public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

  Delete (id_tips:number) {
     this.route.params.subscribe(params => {
        this.supprimerTipsService.Delete(id_tips).subscribe(res => this.ngOnInit());
        location.reload();
    });
  }

}
