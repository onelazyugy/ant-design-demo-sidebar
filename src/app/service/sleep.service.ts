import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WelcomeTasksActions from '../pages/welcome/store/welcome.action';

import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class SleepService {

  constructor(private store: Store<fromApp.AppState>) { }

  addSleepTask(task: string) {
    //make http call to add a task and return an Observable and handle the response
    //you would then take the response and dispatch it to any component
    //fake for now...
    this.store.dispatch(new WelcomeTasksActions.AddTask(task));
  }

  deleteSleepTask(task: string) {
    this.store.dispatch(new WelcomeTasksActions.DeleteTask(task));
  }
}
