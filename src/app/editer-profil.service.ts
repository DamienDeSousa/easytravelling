import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class EditerProfilService {

  constructor(private http: HttpClient) { }

  editEmail(email: string, id: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let datas = {email: email, id: id};
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/user/changeEmail", datas, options )
      .map((res: Response) => res);
    return observable;
  }

  editPasswd(passwd: string, id: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let datas = {passwd: passwd, id: id};
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/user/changePasswd", datas, options )
      .map((res: Response) => res);
    return observable;
  }

  getAllUsers(id: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let observable: Observable<any> = this.http.get("http://bellegarde.damiendesousa.ovh/EasyTravelling/user/getAllExcept/"+id, options )
      .map((res: Response) => res);
    return observable;
  }
}
