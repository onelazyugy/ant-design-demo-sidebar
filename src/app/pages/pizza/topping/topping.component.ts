import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as ToppingAction from '../../pizza/topping/store/topping.action';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit, OnDestroy {
  @Input() input: Ingredient[];
  @Input() index: number;

  toppingSubscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) { }
  
  // toppings: Observable<{ toppings: Ingredient[] }>;
  
  ngOnInit() {
    this.toppingSubscription = this.store.select('toppingReducer').subscribe(toppings => {
      if(this.index === 1) {
        this.input = toppings.cheeses;
      } else if (this.index === 2) {
        this.input = toppings.meats;
      } else {
        this.input = toppings.veggies;
      }
    });
  }

  toppingClicked(selectedTopping: Ingredient) {
    let copiedSelectedTopping = {...selectedTopping};
    copiedSelectedTopping.isSelected = true;
    console.log(copiedSelectedTopping);
    this.store.dispatch(new ToppingAction.ToppingSelected(copiedSelectedTopping));
  }

  ngOnDestroy(): void {
    this.toppingSubscription.unsubscribe();
  }
}