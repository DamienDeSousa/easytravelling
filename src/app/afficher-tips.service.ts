import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Router } from '@angular/router';
import { URLSearchParams } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AfficherTipsService {

  constructor(private http: HttpClient ) { }

  getTips(param:string): Observable<any> {
  	let url: string = "http://localhost:8888/tips/"+param;

  	let observable: Observable<any> = this.http.get(url).map((res: Response) => res);

  	return observable;
  }

}
