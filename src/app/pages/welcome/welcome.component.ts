import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer'; //just convention from ngrx doc
import * as WelcomeActions from './store/welcome.action';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // the generic in the Observable matches the Store generic from the constructor
  tasks: Observable<{ tasks: string[] }>;
  //welcomeTask is exact key from app module
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //select a slice of your state
    //you can subscribe here but we use async pipe in the template instead.
    this.tasks = this.store.select('welcomeTask');
  }

  testEffects() {
    this.store.dispatch(
      new WelcomeActions.AddWelcomeMessage('hi welcome message')
    );
  }

}
