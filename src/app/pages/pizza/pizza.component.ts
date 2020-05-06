import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  current = 0;
  baseMessage = 'First-content';
  cheeses = [{'name': 'mozzarella', 'image': 'assets/cheese/moz.jpg'}, {'name': 'cheddar/matured cheddar', 'image': 'assets/cheese/cheddar.jpg'}, {'name': 'aged havarti', 'image': 'assets/cheese/havarti.jpg'}, 
              {'name': 'gorgonzola', 'image': 'assets/cheese/gorgonzola.jpg'}, {'name': 'parmigiano-reggiano', 'image': 'assets/cheese/parmi.jpg'}];
  meats = [{'name':'Philly Steak', 'image':'assets/meat/phillisteak.jpg'}, {'name':'Beef', 'image':'assets/meat/beef.jpg'}, {'name':'Spicy Italian Sausag', 'image':'assets/meat/sausage.jpg'}, {'name':'Meatball', 'image':'assets/meat/meatballs.jpg'}, {'name':'Grilled Chicken', 'image':'assets/meat/grilled-chicken.jpg'}];
  veggies = [{'name':'Green Peppers', 'image': 'assets/veggie/green-pepper.jpg'}, {'name': 'Roma Tomatoes', 'image': 'assets/veggie/tomato.png'}, {'name': 'Onions', 'image': 'assets/veggie/onions.jpg'}, 
            {'name': 'Jalapeño Peppers', 'image': 'assets/veggie/jal.jpg'}, {'name': 'Mushrooms', 'image': 'assets/veggie/mushrooms.jpg'}, {'name': 'Pineapple', 'image': 'assets/veggie/pine.jpg'}, 
            {'name': 'Black Olives', 'image': 'assets/veggie/olive.jpg'}, {'name': 'Fresh Spinach', 'image': 'assets/veggie/spin.jpg'}, {'name': 'Banana Peppers', 'image': 'assets/veggie/ban-pep.png'}];
  
  constructor() { }

  ngOnInit() {
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
