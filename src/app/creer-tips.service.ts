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

@Injectable()
export class CreerTipsService {

  constructor(private http: HttpClient) { }


  addTips(lieu:string , description: string , idUser:number): Observable<any> {
  	let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //  var date = "2000-01-01";
    var date = new Date();
    var note = 0;
  	let datas = {"lieu": lieu , "description": description , "date":date , "note": note , "idUser":idUser};
    console.log(datas);

  	let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/tips/create" ,
  		datas , options).map((res: Response) => res);

  	return observable;
  }



}
