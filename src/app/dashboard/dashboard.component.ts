import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  utilisateur;

  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
    });
  }

  logout() {
    this.utilisateur = null;
    sessionStorage.removeItem('utilisateur');
    this.router.navigate(['/welcome']);
  }
}
