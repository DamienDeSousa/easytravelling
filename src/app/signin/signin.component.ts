import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { SigninService } from '../signin.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public email: string;
  public password: string;
  public response = null;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private SigninService: SigninService,
              public router: Router,
              private alertService: AlertService)
  {

  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.SigninService.Connection(this.email, this.password ).subscribe(res => {
        this.response = JSON.parse(sessionStorage.getItem('utilisateur'));
        if(this.response.error == true)
        {
          this.alertService.error("Le pseudo ou mot de passe est incorrect", "Une erreur est survenue...");
        }
        else
        {
          this.alertService.success("Bon retour parmi nous !", "", true);
          this.router.navigate(['/welcome']);
        }
      });
    });
  }

  ngOnInit() {

  }
}
