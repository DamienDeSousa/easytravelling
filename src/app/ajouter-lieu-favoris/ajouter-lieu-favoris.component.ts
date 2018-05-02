import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-ajouter-lieu-favoris',
  templateUrl: './ajouter-lieu-favoris.component.html',
  styleUrls: ['./ajouter-lieu-favoris.component.css']
})
export class AjouterLieuFavorisComponent implements OnInit {
  is_checked: boolean = false;
  @Input() photo: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    if(this.photo.favoris == true)
    {
      this.is_checked = true;
    }
  }

  test()
  {
    var obj = {is_checked: !this.is_checked, photo: this.photo};
    this.notify.emit(obj);
  }
}
