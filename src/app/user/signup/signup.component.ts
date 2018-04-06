import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {SignupService} from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  jsonObj = {};

  user = {lastName: "", firstName: "", email: "", passwd: "", birthday: null , genre:""};

  confirmPasswd: string;

  genre: string;

  submitted = false;



  constructor(private route: ActivatedRoute, private location: Location, private SignupService: SignupService, public router: Router) { }

  onSubmit() {
    this.route.params.subscribe(params => {
    this.submitted = true;
    this.SignupService.addUser(this.user.lastName , this.user.firstName , this.user.birthday , this.user.email, this.user.passwd , this.user.genre)
    .subscribe(res => this.jsonObj = res);
  });
  }

  ngOnInit() {
  }

}
