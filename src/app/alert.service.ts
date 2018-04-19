import { Injectable } from '@angular/core';
import { Content } from './classes/content';
import { Subject } from 'rxjs/Subject';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) 
  {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
      }
  });
  }

  success(msg: string = "", title : string = "", keepAfterNavigationChange = false)
  {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'success', title: title, message: msg});
  }

  error(msg: string = "", title : string = "", keepAfterNavigationChange = false) 
  {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'error', title: title, message: msg});
  }

  getContent(): Observable<any>
  {
    return this.subject.asObservable();
  }

  clear()
  {
    this.subject.next();
  }
}
