import { Component } from '@angular/core';
import { ActionService } from './actions/shared/action.service';
import { CauseService } from './causes/shared/cause.service';

@Component({
  selector: 'g5-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ActionService, CauseService ]
})
export class AppComponent {
}
