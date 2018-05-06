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
export class AfficherTipsFavorisService {

  constructor(private http: HttpClient) { }


  getLikedTips(id_utilisateur:number): Observable<any>  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    let datas = {"id_utilisateur": id_utilisateur};
    console.log(datas);
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/tips/getTipsLiked/"+id_utilisateur,
    datas
    ,  options ).map((res: Response)  =>res);
  return observable;
}

}
