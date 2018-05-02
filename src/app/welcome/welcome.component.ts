import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

}
