import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as WelcomeTasksActions from '../welcome/store/welcome.action';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

  constructor(private store: Store<{ welcomeTask: { tasks: string[] } }>) { }

  ngOnInit() {
  }

  addSleepTask() {
    this.store.dispatch(new WelcomeTasksActions.AddTask('sleep'));
  }

}
