import { Component } from '@angular/core';

@Component({
  selector: 'g5-actions',
  templateUrl: './action-list.component.html'
})
export class ActionsComponent {
    pageTitle: string = 'Acciones';
    actions: any[] = [
        {
            "actionId": 1,
            "segment": "children",
            "name": "Maquillaje solidario",
            "description": "Recudamos para maquillaje",
            "causeId": 1,
            "facebookLink": "#",
            "date": "12/01/2017",
            "startHour": "14:00",
            "endHour": "16:00",
            "map": "#"
        },
        {
            "actionId": 2,
            "segment": "children",
            "name": "Maquillaje solidario",
            "description": "Recudamos para maquillaje",
            "causeId": 2,
            "facebookLink": "#",
            "date": "12/01/2017",
            "startHour": "14:00",
            "endHour": "16:00",
            "map": "#"
        },
        {
            "actionId": 3,
            "segment": "children",
            "name": "Maquillaje solidario",
            "description": "Recudamos para maquillaje",
            "causeId": 2,
            "facebookLink": "#",
            "date": "12/01/2017",
            "startHour": "14:00",
            "endHour": "16:00",
            "map": "#"
        }
    ];
}