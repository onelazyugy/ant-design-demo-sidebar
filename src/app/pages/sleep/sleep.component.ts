import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as WelcomeTasksActions from '../welcome/store/welcome.action';
import { SleepService } from 'src/app/service/sleep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {
  tasks: Observable<{ tasks: string[] }>;
  
  constructor(private store: Store<{ welcomeTask: { tasks: string[] } }>, private sleepService: SleepService) { }

  ngOnInit() {
    this.tasks = this.store.select('welcomeTask');
  }

  addSleepTask() {
    this.sleepService.addSleepTask('sleep');
  }

  deleteSleepTask() {
    this.sleepService.deleteSleepTask('sleep');
  }

}