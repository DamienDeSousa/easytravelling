import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrierParCategorieService } from '../trier-par-categorie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Categorie } from '../classes/Categorie';

@Component({
  selector: 'app-trier-par-categorie',
  templateUrl: './trier-par-categorie.component.html',
  styleUrls: ['./trier-par-categorie.component.css']
})
export class TrierParCategorieComponent implements OnInit {
  response: Array<Categorie> = [];
  categorie: string = "";
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, 
              private location: Location, 
              public router: Router, 
              private trierParCategorieService: TrierParCategorieService,
              private alertService: AlertService) 
  {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trierParCategorieService.getAllCategorie().subscribe(res => {
        for(let i in res)
        {
          if(i != "error")
          {
            var cat = new Categorie(res[i].id, res[i].nom_fr, res[i].nom_en);
            this.response.push(cat);
          }
        }
      });
    });
  }

  onBlur() {
    this.notify.emit(this.categorie);
  }
}
