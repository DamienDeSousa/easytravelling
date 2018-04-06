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
import { User } from './user';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) 
  { }
    addUser(firstName:string, lastName:string , birthday:Date , email:string , passwd:string , genre:string): Observable<any> 
    {
      let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let observable : Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/welcome/signUp",
     {"lastName": lastName , "firstName":firstName ,  "email": email , "passwd": passwd , "birthday": birthday ,"genre": genre} , options)
     .map((res: Response) => res);

     return observable;
    }
  }

