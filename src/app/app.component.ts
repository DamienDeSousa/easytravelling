import { Component } from '@angular/core';
import { SigninComponent} from './user/signin/signin.component';
import { SigninService } from './user/signin.service';

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
