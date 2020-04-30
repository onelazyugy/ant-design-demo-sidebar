import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WelcomeTasksActions from '../pages/welcome/store/welcome.action';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private store: Store<{ welcomeTask: { tasks: string[] } }>) { }

  addTasks(tasks: string[]) {
    this.store.dispatch(new WelcomeTasksActions.AddTasks(tasks));
    // return tasks;
  }
}
