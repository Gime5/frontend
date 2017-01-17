import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IAction } from './action.model';

@Injectable()
export class ActionService {
    private _actionUrl = 'api/actions/actions.json';

    constructor(private _http: Http){}

    getActions(): Observable<IAction[]> {
        return this._http.get(this._actionUrl)
            .map((response: Response) => <IAction[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}