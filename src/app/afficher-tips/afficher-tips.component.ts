import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { URLSearchParams} from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AfficherTipsService } from '../afficher-tips.service';


@Component({
  selector: 'app-afficher-tips',
  templateUrl: './afficher-tips.component.html',
  styleUrls: ['./afficher-tips.component.css']
})
export class AfficherTipsComponent implements OnInit {

  jsonObj = {};
  jsonObjT = Object;
  utilisateur = Object;
  idUtilisateur = 0;

  constructor(private route: ActivatedRoute, 
              private location: Location, 
              private afficherTipsService: AfficherTipsService, 
              public router: Router) { }

  ngOnInit() {

  	this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));

  	this.route.params.subscribe(params => {

  		this.afficherTipsService.getTips(params.lieu).subscribe(res => this.jsonObj = res);

	});
 }

}
