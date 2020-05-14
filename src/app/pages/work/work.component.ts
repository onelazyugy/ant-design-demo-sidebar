import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer'; //just convention from ngrx doc

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  tasks: Observable<{ tasks: string[] }>;
  
  constructor(private workService: WorkService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.tasks = this.store.select('welcomeTask');
  }

  addMultipleTasks() {
    const tasksAtWork = ['attend meeting', 'write code'];
    this.workService.addTasks(tasksAtWork);
  }
}
