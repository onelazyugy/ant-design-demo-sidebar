import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/model/pizza.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit, OnDestroy {
  pizzaSubscription: Subscription;
  orderId: number;

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.pizzaSubscription = this.store.select('startReducer').subscribe(data => {
      this.orderId = data.orderSummary.orderId;
    });
  }

  startNewOrder() {
    this.router.navigate(['/pizza']);
  }

  ngOnDestroy(): void {
    this.pizzaSubscription.unsubscribe();
  }

}
