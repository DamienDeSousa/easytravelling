import { Component } from '@angular/core';
import { SigninComponent} from './signin/signin.component';
import { SigninService } from './signin.service';
import { TipsComponent} from './tips/tips.component';
import { AfficherTipsComponent} from './afficher-tips/afficher-tips.component';
import { CreerTipsComponent} from './creertips/creertips.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyTravelling';
  utilisateur = null;

  ngOnInit() {
    }
 }
