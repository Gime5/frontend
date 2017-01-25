import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CauseListComponent } from './causes/cause-list/cause-list.component';
import { CauseComponent } from './causes/cause/cause.component';
import { CauseFilterPipe } from './causes/cause-list/cause-filter.pipe';
import { ActionListComponent } from './actions/action-list/action-list.component';

import { g5CharityComponent } from './shared/g5charity.component';

@NgModule({
  declarations: [
    AppComponent,
    CauseListComponent,
    CauseComponent,
    ActionListComponent,
    CauseFilterPipe,
    g5CharityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'causes',
        pathMatch: 'full'
      },
      {
        path: 'causes',
        component: CauseListComponent
      },
      {
        path: 'cause/:id',
        component: CauseComponent
      },
      {
        path: 'actions',
        component: ActionListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
