import { Component, OnInit } from '@angular/core';

import { ICause } from '../shared/cause.model';
import { CauseService } from '../shared/cause.service';

@Component({
  selector: 'g5-cause-list',
  templateUrl: './cause-list.component.html'
})
export class CauseListComponent implements OnInit {
  causes: ICause[];
  errorMessage: string;

  constructor(private _causeService: CauseService) {

  }

  ngOnInit(): void {
    this._causeService.getCauses()
                      .subscribe(causes => this.causes = causes,
                      error => this.errorMessage = <any>error);
  }
}