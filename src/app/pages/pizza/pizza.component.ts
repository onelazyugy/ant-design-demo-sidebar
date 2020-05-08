import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit, OnDestroy {
  current = 0;
  baseMessage = 'First-content';
  cheeses: Ingredient[];
  meats: Ingredient[];
  veggies: Ingredient[];

  selectedCheeeses: Ingredient[];
  selectedMeats: Ingredient[];
  selectedVeggies: Ingredient[];

  toppingSubscription: Subscription;
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.toppingSubscription = this.store.select('toppingReducer').subscribe(toppings => {
      this.cheeses = toppings.cheeses;
      this.meats = toppings.meats;
      this.veggies = toppings.veggies;
    });
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

  done(): void {
    console.log('done');   
  }

  ngOnDestroy(): void {
    this.toppingSubscription.unsubscribe();
  }
}
