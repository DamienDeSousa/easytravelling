import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-recherche-lieux',
  templateUrl: './recherche-lieux.component.html',
  styleUrls: ['./recherche-lieux.component.css']
})
export class RechercheLieuxComponent implements OnInit {
  rayon: number;

  constructor() { }

  ngOnInit() {
  }

  getRayon(message:number):void {
    this.rayon = message;
  }

  onSubmit() {
    console.log(this.rayon);
  }
}
