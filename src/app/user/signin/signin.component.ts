import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  utilisateur: User;

  private email: string;
  private password: string;

  constructor(private route: ActivatedRoute, private location: Location, private SigninService: SigninService, public router: Router) 
  { 

  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.SigninService.Connection(this.email, this.password ).subscribe(res => {
        this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
      });
    });
  }

  ngOnInit() {
    this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

}
