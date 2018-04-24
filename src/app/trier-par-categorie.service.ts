import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrierParCategorieService {

  constructor(private http: HttpClient) 
  {

  }

  getAllCategorie(): Observable<any>
  {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let observable: Observable<any> = this.http.get("http://bellegarde.damiendesousa.ovh/EasyTravelling/categorie/getAllCategorie",  options )
      .map((res: Response) => res);
    return observable;
  }
}
