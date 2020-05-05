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
  welcomeMessage: string;
  errorWelcomeMessage: string;
  welcomeMessageDisplay: string;
  // the generic in the Observable matches the Store generic from the constructor
  tasks: Observable<{ tasks: string[] }>;
  //welcomeTask is exact key from app module
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //select a slice of your state
    //you can subscribe here but we use async pipe in the template instead.
    this.tasks = this.store.select('welcomeTask');
    console.log('this.task:', this.tasks);

    this.store.select('welcomeTask').subscribe(welcomeState => {
      console.log('welcomeState:', welcomeState);
      this.welcomeMessage = welcomeState.welcomeMessageSuccess;
      console.log('this.welcomeMessage:', this.welcomeMessage);
      this.errorWelcomeMessage = welcomeState.welcomeMessageFailed;
      console.log('this.errorWelcomeMessage:', this.welcomeMessage);
      this.welcomeMessageDisplay = welcomeState.displayWelcomeMessage;
      console.log('this.welcomeMessageDisplay:', this.welcomeMessageDisplay);
    })
  }

  testEffects() {
    this.store.dispatch(
      new WelcomeActions.AddWelcomeMessage('hi welcome ')
    );
  }

}
