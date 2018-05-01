import { Component, OnInit , Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CreerTipsService } from '../creer-tips.service';

@Component({
  selector: 'app-creertips',
  templateUrl: './creertips.component.html',
  styleUrls: ['./creertips.component.css']
})
export class CreerTipsComponent implements OnInit {

	descriptionText:string;
	lieuText:string;
  utilisateur;
	jsonObjT = {};

	submitted = false;

  constructor(private route: ActivatedRoute,
    private location: Location,
   	private CreerTipsService: CreerTipsService,
    public router: Router) {

  	}


    ngOnInit() {
      this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
    }


	onSubmit() {
		 this.route.params.subscribe(params => {
       console.log(this.descriptionText);
       console.log(this.lieuText);
       console.log(this.utilisateur.id);
		 	this.CreerTipsService.addTips( this.lieuText , this.descriptionText , this.utilisateur.id).
		 	subscribe(res => this.jsonObjT = res);

		 	this.submitted = true;
        });
	}


  	reset_() {
  		this.descriptionText = null;
  		this.lieuText = null;
  	}



}
