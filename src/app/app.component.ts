import { Component } from '@angular/core';
import { SigninComponent} from './user/signin/signin.component';
import { SigninService } from './user/signin.service';
import { TipsComponent} from './tips/tips.component';
import { AfficherTipsComponent} from './afficher-tips/afficher-tips.component';
import { CreerTipsComponent} from './creer-tips/creer-tips.component';
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
