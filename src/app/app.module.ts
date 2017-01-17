import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CauseListComponent } from './causes/cause-list/cause-list.component';
import { CauseComponent } from './causes/cause/cause.component';
import { ActionListComponent } from './actions/action-list.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    CauseListComponent,
    CauseComponent,
    ActionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/causes',
        pathMatch: 'full'
      },
      {
        path: 'causes',
        component: CauseListComponent
      },
      {
        path: 'cause',
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
