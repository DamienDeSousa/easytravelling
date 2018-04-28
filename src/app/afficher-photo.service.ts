import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AfficherPhotoService {

  constructor(private http: HttpClient)
  {
    
  }

  getPhotos(id: number): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let observable: Observable<any> = this.http.get("http://bellegarde.damiendesousa.ovh/EasyTravelling/user/getPhotos/"+id, options ).map((res: Response) => res);
    return observable;
  }
}
