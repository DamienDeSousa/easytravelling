import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class AjouterPhotosCompteService {

  constructor(private http: HttpClient) { }

  create(formData: any): Observable<any>
  {
    let observable: Observable<any> = this.http.post("http://bellegarde.damiendesousa.ovh/EasyTravelling/user/addPhoto", formData).map((res: Response) => res);
    return observable;
  }
}
