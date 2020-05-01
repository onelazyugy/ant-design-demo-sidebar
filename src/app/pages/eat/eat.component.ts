import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer'; //just convention from ngrx doc
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.css']
})
export class EatComponent implements OnInit {
  tasks: Observable<{ tasks: string[] }>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.tasks = this.store.select('sleepTask');
  }

}
