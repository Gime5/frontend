import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CausesComponent } from './causes/cause-list/causes.component';
import { CauseDetailComponent } from './causes/cause/cause-detail.component';
import { ActionsComponent } from './actions/action-list.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    CausesComponent,
    CauseDetailComponent,
    ActionsComponent
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
        component: CausesComponent
      },
      {
        path: 'cause',
        component: CauseDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
