import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICause } from '../shared/cause.model';
import { CauseService } from '../shared/cause.service';

@Component({
  selector: 'g5-cause',
  templateUrl: './cause.component.html'
})
export class CauseComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Cause Detail';
  cause: ICause;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _causeService: CauseService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getCause(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCause(id: number) {
    this._causeService.getCause(id).subscribe(
      cause => this.cause = cause,
      error => this.errorMessage = <any>error);
  }

}
