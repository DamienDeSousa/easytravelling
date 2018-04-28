import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ajouter-lieu-partage',
  templateUrl: './ajouter-lieu-partage.component.html',
  styleUrls: ['./ajouter-lieu-partage.component.css']
})
export class AjouterLieuPartageComponent implements OnInit {
  is_checked: boolean = false;
  @Input() photo: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if(this.photo.partager == true)
    {
      this.is_checked = true;
    }
    console.log(this.photo);
  }

  test()
  {
    var obj = {is_checked: !this.is_checked, photo: this.photo};
    this.notify.emit(obj);
  }
}
