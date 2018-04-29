import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AVisitePlusTardService } from '../a-visite-plus-tard.service';

@Component({
  selector: 'app-a-visite-plus-tard',
  templateUrl: './a-visite-plus-tard.component.html',
  styleUrls: ['./a-visite-plus-tard.component.css']
})
export class AVisitePlusTardComponent implements OnInit {
  adresse: string;
  note: string;
  liste: any;
  user: any;
  notes: any;

  constructor(private route: ActivatedRoute,
    private aVisitePlusTardService: AVisitePlusTardService,
    private alertService: AlertService,
    public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('utilisateur'));
    this.route.params.subscribe(params => {
      this.aVisitePlusTardService.getAll(this.user.id).subscribe(res => {
        if(res.error == true)
        {
          this.alertService.error(res.message, "Une erreur est survenue...");
        }
        else
        {
          this.notes = res.tab;
        }
      })
    })
  }

  submit()
  {
    this.route.params.subscribe(params => {
      this.aVisitePlusTardService.create(this.adresse, this.note, this.user.id).subscribe(res => {
        if(res.error == true)
        {
          this.alertService.error(res.message, "Une erreur est survenue...");
        }
        else
        {
          this.notes = res.tab;
          this.alertService.success("Votre notification est désormais visible dans le tableau récapitulatif.", "Ajout réussi !");
        }
      });
    });
  }
}
