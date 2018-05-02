import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partager-lieux-deja-visite',
  templateUrl: './partager-lieux-deja-visite.component.html',
  styleUrls: ['./partager-lieux-deja-visite.component.css']
})
export class PartagerLieuxDejaVisiteComponent implements OnInit {
  @Input() photos: any;

  constructor() { }

  ngOnInit() {
  }

}
