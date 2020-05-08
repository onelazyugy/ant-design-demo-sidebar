import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/model/pizza.model';
import * as PizzaAction from './store/pizza.action';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit, OnDestroy {
  current = 0;
  baseMessage = 'First-content';
  //data for pizza component
  radioValue = '';
  initialPizzaImage = '';

  //data for Topping component
  cheeses: Ingredient[];
  meats: Ingredient[];
  veggies: Ingredient[];

  selectedCheeeses: Ingredient[];
  selectedMeats: Ingredient[];
  selectedVeggies: Ingredient[];

  toppingSubscription: Subscription;
  pizzaSubscription: Subscription;
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //load data for Topping compnent
    this.toppingSubscription = this.store.select('toppingReducer').subscribe(toppings => {
      this.cheeses = toppings.cheeses;
      this.meats = toppings.meats;
      this.veggies = toppings.veggies;
    });
    //load data for this pizza component
    this.pizzaSubscription = this.store.select('pizzaReducer').subscribe(data => {
      const pizza: Pizza = data.pizza;
      this.radioValue = pizza.size[0].value;
      this.initialPizzaImage = pizza.typeOfImage.initialPizzaImage;
    });
  }

  selected(size: string) {
    console.log('size:', size);
    this.store.dispatch(new PizzaAction.SelectAPizzaSize(size));
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
    if(this.current === 4){
      this.toppingSubscription = this.store.select('toppingReducer').subscribe(toppings => {
        this.selectedCheeeses = toppings.selectedCheeses;
        this.selectedMeats = toppings.selectedMeats;
        this.selectedVeggies = toppings.selectedVeggies;
      });
    }
  }

  checkout(): void {
    console.log('checking out...');   
  }

  ngOnDestroy(): void {
    this.toppingSubscription.unsubscribe();
    this.pizzaSubscription.unsubscribe();
  }
}
