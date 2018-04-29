import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AVisitePlusTardService {

  constructor(private http: HttpClient) { }

  create(adresse: string, note: string, idUser: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let datas = {adresse: adresse, note: note, idUser: idUser};
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/note/create", datas, options).map((res: Response) => res);
    return observable;
  }

  getAll(idUser: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let observable: Observable<any> = this.http.get("http://bellegarde.damiendesousa.ovh/EasyTravelling/note/getAll/"+idUser, options).map((res: Response) => res);
    return observable;
  }
}
