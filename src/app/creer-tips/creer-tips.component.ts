import { Component, OnInit , Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CreerTipsService } from '../creer-tips.service';

@Component({
  selector: 'app-creer-tips',
  templateUrl: './creer-tips.component.html',
  styleUrls: ['./creer-tips.component.css']
})
export class CreerTipsComponent implements OnInit {

	description;
	lieu;

	jsonObjT = {};

	submitted = false;

  constructor(private route: ActivatedRoute, 
    private location: Location, 
   	private CreerTipsService: CreerTipsService, 
    public router: Router) { 

  	}

  

	onSubmit() {
		 this.route.params.subscribe(params => {
		 	this.CreerTipsService.addTips(this.description , this.lieu).
		 	subscribe(res => this.jsonObjT = res);

		 	this.submitted = true;
        });
	}


  	reset_() {
  		this.description = null;
  		this.lieu = null; 	
  	}

  ngOnInit() {
	}

}
