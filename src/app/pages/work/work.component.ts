import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private workService: WorkService) { }

  ngOnInit() {
  }

  addMultipleTasks() {
    const tasksAtWork = ['attend meeting', 'write code'];
    this.workService.addTasks(tasksAtWork);
  }

}
