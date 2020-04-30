import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // the generic in the Observable matches the Store generic from the constructor
  tasks: Observable<{ tasks: string[] }>;
  //welcomeTask is exact key from app module
  constructor(private store: Store<{ welcomeTask: { tasks: string[] } }>) { }

  ngOnInit() {
    //select a slice of your state
    //you can subscribe here but we use async pipe in the template instead.
    this.tasks = this.store.select('welcomeTask');
  }

}
