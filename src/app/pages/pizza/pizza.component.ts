import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  current = 0;
  baseMessage = 'First-content';
  cheeses = [{'id': 0, 'name': 'mozzarella', 'image': 'assets/cheese/moz.jpg'}, {'id': 1, 'name': 'cheddar/matured cheddar', 'image': 'assets/cheese/cheddar.jpg'}, {'id': 2, 'name': 'aged havarti', 'image': 'assets/cheese/havarti.jpg'}, 
              {'id': 3, 'name': 'gorgonzola', 'image': 'assets/cheese/gorgonzola.jpg'}, {'id': 4, 'name': 'parmigiano-reggiano', 'image': 'assets/cheese/parmi.jpg'}];
  meats = [{'id': 0, 'name':'Philly Steak', 'image':'assets/meat/phillisteak.jpg'}, {'id': 1, 'name':'Beef', 'image':'assets/meat/beef.jpg'}, {'id': 2, 'name':'Spicy Italian Sausag', 'image':'assets/meat/sausage.jpg'}, {'id': 3, 'name':'Meatball', 'image':'assets/meat/meatballs.jpg'}, {'id': 4, 'name':'Grilled Chicken', 'image':'assets/meat/grilled-chicken.jpg'}];
  veggies = [{'id': 0, 'name':'Green Peppers', 'image': 'assets/veggie/green-pepper.jpg'}, {'id': 1, 'name': 'Roma Tomatoes', 'image': 'assets/veggie/tomato.png'}, {'id': 2, 'name': 'Onions', 'image': 'assets/veggie/onions.jpg'}, 
            {'id': 3, 'name': 'Jalapeño Peppers', 'image': 'assets/veggie/jal.jpg'}, {'id': 4, 'name': 'Mushrooms', 'image': 'assets/veggie/mushrooms.jpg'}, {'id': 5, 'name': 'Pineapple', 'image': 'assets/veggie/pine.jpg'}, 
            {'id': 6, 'name': 'Black Olives', 'image': 'assets/veggie/olive.jpg'}, {'id': 7, 'name': 'Fresh Spinach', 'image': 'assets/veggie/spin.jpg'}, {'id': 8, 'name': 'Banana Peppers', 'image': 'assets/veggie/ban-pep.png'}];
  
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
