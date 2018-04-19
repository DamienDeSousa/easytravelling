import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

	lieu;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  show() {
  	let url: string='/tips/'+this.lieu;
  	this.router.navigate([url]);
  }

}
