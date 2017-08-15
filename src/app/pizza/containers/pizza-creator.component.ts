import { Component } from '@angular/core';


import { Pizza, Topping } from '../pizza.interface';
import { PizzaService } from '../pizza.service'

@Component({
  selector: 'pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.scss']
})

export class PizzaCreatorComponent {
  
  pizzas$ = this.pizzaService.select<Pizza[]>('pizzas');
  toppings$ = this.pizzaService.select<Topping[]>('toppings');

  constructor(
    private pizzaService: PizzaService
  ) {}

  addPizza(event: any) {
    this.pizzaService.addPizza(event);
  }
}