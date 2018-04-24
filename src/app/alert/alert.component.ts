import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Content } from '../classes/Content';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  content : any;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getContent().subscribe(message => {this.content = message});
  }

  clear()
  {
    this.alertService.clear();
  }
}
