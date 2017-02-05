import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { CauseListComponent } from './causes/cause-list/cause-list.component';
import { CauseComponent } from './causes/cause/cause.component';
import { CauseFilterPipe } from './causes/cause-list/cause-filter.pipe';
import { ActionListComponent } from './actions/action-list/action-list.component';

import { UserRegistrationComponent } from './users/registration/user-registration.component';

import { EqualValidator } from './shared/equal-validator.directive'; 

import { g5CharityComponent } from './shared/g5charity.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomepageComponent,

    CauseListComponent,
    CauseComponent,
    CauseFilterPipe,

    ActionListComponent,

    UserRegistrationComponent,

    EqualValidator,
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
        component: HomepageComponent
      },
      {
        path: 'home',
        component: HomepageComponent
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
      },
      {
        path: 'register',
        component: UserRegistrationComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
