import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert.service';
import { EditerProfilService } from '../editer-profil.service';

@Component({
  selector: 'app-voir-autres-profils',
  templateUrl: './voir-autres-profils.component.html',
  styleUrls: ['./voir-autres-profils.component.css']
})
export class VoirAutresProfilsComponent implements OnInit {
  users: any;//list of users' account
  userSelected: any;//user account selected in the list
  user: any;//user connected

  constructor(private route: ActivatedRoute,
    private editerProfilService: EditerProfilService,
    private alertService: AlertService,
    public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));

    this.route.params.subscribe(params => {
      this.editerProfilService.getAllUsers(this.user.id).subscribe(res => {
        console.log(res);
        if(res.error == true)
        {
          this.alertService.error(res.message, "Une erreur est survenue...");
        }
        else
        {
          this.users = res.tab;
        }
      });
    });
  }

  showDetails(user: any)
  {
    this.userSelected = user;
  }
}
