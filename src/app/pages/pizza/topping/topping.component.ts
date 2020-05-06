import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {
  @Input() input: [];
  constructor() { }

  ngOnInit() {
    console.log('input:', this.input);
  }

}
