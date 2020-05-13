import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/model/pizza.model';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit, OnDestroy {
  pizzaSubscription: Subscription;
  pizzaId: number;
  test: number;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.pizzaSubscription = this.store.select('pizzaReducer').subscribe(data => {
      this.pizzaId = data.pizza.id;
    });
  }

  ngOnDestroy(): void {
    this.pizzaSubscription.unsubscribe();
  }

}
