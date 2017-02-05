import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'g5-user-registration',
    moduleId: module.id,
    templateUrl: 'user-registration.component.html',
    styleUrls: ['user-registration.component.css'],
    providers: [UserService]
})
export class UserRegistrationComponent implements OnInit {
    pageTitle: string = 'Registro';
    pageSubtitle: string = 'Ayúdanos a crecer en tu zona';
    errorMessage: string;
    status: string;

    user: IUser;
    userConfirmation: any;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit(): void {
        this.user = {
            id: 1, role: "", name: "", last_name: "", email: "", password: "", image: "NULL",
            province: "", zip_code: ""
        };
    
        this.userConfirmation = { confirmPassword: "", confirmEmail: "" };
    }

    doRegister() {
        this._userService.register(this.user).subscribe(
            response => {
                this.status = "success";
                this.user.id = response;

                if (response == null) {
                    this.status = "error";
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {

                }
            }
        );
    }
}