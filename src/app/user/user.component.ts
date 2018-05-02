import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
  }

  onUserChange(u: any)
  {
    this.user = u;
  }
  
  redirectAjouterPhotos()
  {
    this.router.navigate(['/profil/photos']);
  }

  redirectAjouterLieuPartage()
  {
    this.router.navigate(['/profil/partager-lieux']);
  }

  redirectAVisiterPlusTard()
  {
    this.router.navigate(['/profil/visiter-plus-tard']);
  }

  redirectVoirProfils()
  {
    this.router.navigate(['/profil/profil-membres']);
  }
}
