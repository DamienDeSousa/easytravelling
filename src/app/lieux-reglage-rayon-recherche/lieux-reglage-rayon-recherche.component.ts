import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-lieux-reglage-rayon-recherche',
  templateUrl: './lieux-reglage-rayon-recherche.component.html',
  styleUrls: ['./lieux-reglage-rayon-recherche.component.css']
})
export class LieuxReglageRayonRechercheComponent implements OnInit {
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  rayon: number;

  constructor() { }

  ngOnInit() {
  }

  onBlur() {
    this.notify.emit(this.rayon);
  }

}
