import { Component, OnInit } from '@angular/core';
import { IAction } from './shared/action.model';
import { ActionService } from './shared/action.service';

@Component({
    selector: 'g5-actions',
    templateUrl: './action-list.component.html'
})
export class ActionListComponent implements OnInit {
    pageTitle: string = 'Acciones';
    errorMessage: string;
    actions: IAction[];

    constructor(private _actionService: ActionService) {

    }

    ngOnInit(): void {
        this._actionService.getActions()
                            .subscribe(actions => this.actions = actions,
                            error => this.errorMessage = <any>error);
    }
}