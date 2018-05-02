import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-afficher-infos-user',
  templateUrl: './afficher-infos-user.component.html',
  styleUrls: ['./afficher-infos-user.component.css']
})
export class AfficherInfosUserComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
