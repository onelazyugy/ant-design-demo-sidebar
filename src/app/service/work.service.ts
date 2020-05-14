import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WelcomeTasksActions from '../pages/welcome/store/welcome.action';

import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private store: Store<fromApp.AppState>) { }

  addTasks(tasks: string[]) {
    this.store.dispatch(new WelcomeTasksActions.AddTasks(tasks));
  }
}
