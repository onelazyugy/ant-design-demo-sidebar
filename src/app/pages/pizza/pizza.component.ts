import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { Pizza, PizzaSize } from 'src/app/model/pizza.model';
import * as PizzaAction from './store/pizza.action';
import _ from 'lodash';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit, OnDestroy {
  current = 0;
  //data for pizza component
  pizzaSizeArray: PizzaSize[] = [];
  selectedPizzaSize = '';
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
      this.pizzaSizeArray = pizza.size;

      const currentSelectedSize = _.filter(this.pizzaSizeArray, {'isSelected': true});
      this.selectedPizzaSize = currentSelectedSize[0].value;//should always be one in the array
      this.initialPizzaImage = pizza.typeOfImage.initialPizzaImage;
    });
  }

  onSelectSize(size: string) {
    let selectedSize: PizzaSize[] = _.filter(this.pizzaSizeArray, {'value': size});
    let selectedSizeUpdated = {...selectedSize[0], isSelected: true}
    this.store.dispatch(new PizzaAction.SelectAPizzaSize(selectedSizeUpdated));
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

      this.pizzaSubscription = this.store.select('pizzaReducer').subscribe(data => {
        const pizzaSizes: PizzaSize[] = data.pizza.size;
        const selectedPizzaSize = _.filter(pizzaSizes, {isSelected: true});
        console.log(selectedPizzaSize);
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
