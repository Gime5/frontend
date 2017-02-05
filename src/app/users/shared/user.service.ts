import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    public url = "http://gime5.aititubi.es/api/api.php";

    constructor(private _http: Http){}

    register(user_to_register) {
        delete user_to_register['id'];
        let json = JSON.stringify(user_to_register);
        let params = json;
        let headers = new Headers({ 'Content-Type': 'aplication:x-www-form-urlenconded' });

        return this._http.post(this.url + "/user/new", params, { headers: headers }).
            map(res => res.json());
    }
}