import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class SigninService {

  constructor(private http: HttpClient) { }

  Connection(email:string, passwd:string):Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/welcome/signIn", {"email": email, "passwd": passwd },  options )
    .map((res: Response) => sessionStorage.setItem('utilisateur', JSON.stringify(res)));
    //(res: Response) => res
    return observable;
  }
}

