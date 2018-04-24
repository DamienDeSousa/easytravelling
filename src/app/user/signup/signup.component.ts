import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {SignupService} from '../signup.service';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  jsonObj = null;

  user = {lastName: "", firstName: "", email: "", passwd: "", birthday:  null, gender:""};

  confirmPasswd: string;

  genre: string;



  constructor(private route: ActivatedRoute, 
              private location: Location, 
              private SignupService: SignupService, 
              public router: Router,
              private alertService: AlertService) { }

  onSubmit() {
    this.route.params.subscribe(params => {
    this.SignupService.addUser(this.user.lastName , this.user.firstName , this.user.birthday , this.user.email, this.user.passwd , this.user.gender)
      .subscribe(res => {
        this.jsonObj = res;
        if(this.jsonObj.error == true)
        {
          this.alertService.error("Au moins un des champs a été mal saisi.", "Une erreur est survenue...");
        }
        else
        {
          this.alertService.success("Vous pouvez maintenant vous connecter !", "Inscription réalisée avec succès !", true);
          this.router.navigate(['/signin']);
        }
      });
  });
  }

  ngOnInit() {
  }

}
