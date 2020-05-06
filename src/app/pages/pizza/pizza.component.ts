import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  current = 0;
  baseMessage = 'First-content';
  cheeses = ['mozzarella', 'cheddar/matured cheddar', 'aged havarti', 'gorgonzola', 'parmigiano-reggiano'];
  meats = ['Philly Steak', 'Beef', 'Spicy Italian Sausag', 'Meatball', 'Grilled Chicken'];
  veggies = ['Green Peppers', 'Roma Tomatoes', 'Onions', 'Jalapeño Peppers', 'Mushrooms', 'Pineapple', 'Black Olives', 'Fresh Spinach', 'Banana Peppers'];
  
  constructor() { }

  ngOnInit() {
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.baseMessage = 'show me the base pizza';
        break;
      }
      case 1: {
        
        break;
      }
      case 2: {
        
        break;
      }
      case 3: {
        
        break;
      }
      case 4: {
        
        break;
      }
      default: {
        this.baseMessage = 'error';
      }
    }
  }
}
