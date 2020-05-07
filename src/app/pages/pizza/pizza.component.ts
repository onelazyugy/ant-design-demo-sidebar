import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  current = 0;
  baseMessage = 'First-content';
  cheeses: Ingredient[];
  meats: Ingredient[];
  veggies: Ingredient[];
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('toppingReducer').subscribe(toppings => {
      console.log('initial toppings: ', toppings);
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
  }

  done(): void {
    console.log('done');   
  }
}
