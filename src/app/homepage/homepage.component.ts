import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICause } from '../causes/shared/cause.model';
import { CauseService } from '../causes/shared/cause.service';

@Component({
  moduleId: module.id,
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Gime5';

  causes: ICause[];
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _causeService: CauseService) {
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
  }

  getCauses(): void {
    this._causeService.getCauses().subscribe(
      causes => this.causes = causes,
      error => this.errorMessage = <any>error);
  }

}
