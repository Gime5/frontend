import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICause } from './cause.model';

@Injectable()
export class CauseService {
      private _actionUrl = 'api/causes/causes.json';

      constructor(private _http: Http) { }

      getCauses(): Observable<ICause[]> {
            return this._http.get(this._actionUrl)
                  .map((response: Response) => <ICause[]>response.json())
                  .do(data => console.log('All: ' + JSON.stringify(data)))
                  .catch(this.handleError);
      }

      getCause(id: number): Observable<ICause> {
            return this.getCauses()
                  .map((causes: ICause[]) => causes.find(cause => cause.id == id));
      }

      private handleError(error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
      }
}