import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Subscription } from 'rxjs';
import { OrderSummary } from 'src/app/model/order-summary.model';
import { PizzaSize } from 'src/app/model/pizza.model';
import _ from 'lodash';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  toppingSubscription: Subscription;
  validateForm: FormGroup;

  orderSummary: OrderSummary;

  totalSelectedCheeses: number;
  totalSelectedMeats: number;
  totalSelectedVeggies: number;
  

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      comment: [null],
      cardNumber: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
      cvv: [null, [Validators.required]]
    });
    this.toppingSubscription = this.store.select('toppingReducer').subscribe(toppings => {
      const totalSelectedCheeses: number = toppings.selectedCheeses.length;
      const totalSelectedMeats: number = toppings.selectedMeats.length;
      const totalSelectedVeggies: number = toppings.selectedVeggies.length;
      const totalMeatCost = totalSelectedMeats * .90;
      const totalCheeseCost = totalSelectedCheeses * .70;
      const totalVeggieCost = totalSelectedVeggies * .80;
      const subtotal = totalMeatCost + totalCheeseCost + totalVeggieCost; //not calculate pizza base price yet
      const totalTax = null;
      const totalDue = null;

      this.orderSummary = {
        totalSelectedMeatTopping: totalSelectedMeats,
        totalCostForSelectedMeatTopping: totalMeatCost,
        totalSelectedVeggieTopping: totalSelectedVeggies,
        totalCostForSelectedVeggieTopping: totalVeggieCost,
        totalSelectedCheeseTopping: totalSelectedCheeses,
        totalCostForSelectedCheeseTopping: totalCheeseCost,
        pizzaBasePrice: null,
        pizzaSize: null,
        subtotal: subtotal,
        taxPercent: '7%',
        totalTax: null,
        totalDue: null
      }
    });

    this.toppingSubscription = this.store.select('pizzaReducer').subscribe(data => {
      //pizza size
      const pizzaSizes: PizzaSize[] = data.pizza.size;
      const finalSelectedPizzaSize: PizzaSize[] = _.filter(pizzaSizes, {isSelected: true});//guarantee to be 1 at all time
      const finalPizzaSize = finalSelectedPizzaSize[0].label;
      this.orderSummary.pizzaSize = finalPizzaSize;
      this.orderSummary.pizzaBasePrice = data.pizza.price;
      const newSubTotal = this.orderSummary.subtotal + data.pizza.price;
      this.orderSummary.subtotal = newSubTotal;
      const newTotalTax = newSubTotal * .07;
      this.orderSummary.totalTax = newTotalTax;
      this.orderSummary.totalDue = newTotalTax + newSubTotal;
    });
  }

  ngOnDestroy(): void {
    this.toppingSubscription.unsubscribe();
  }
}
