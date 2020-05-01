import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SleepService } from 'src/app/service/sleep.service';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer'; //just convention from ngrx doc

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {
  tasks: Observable<{ tasks: string[] }>;

  constructor(private store: Store<fromApp.AppState>, private sleepService: SleepService) { }

  ngOnInit() {
    this.tasks = this.store.select('welcomeTask');//autocomplete will show different open when you type
  }

  addSleepTask() {
    this.sleepService.addSleepTask('sleep');
  }

  deleteSleepTask() {
    this.sleepService.deleteSleepTask('sleep');
  }

}
