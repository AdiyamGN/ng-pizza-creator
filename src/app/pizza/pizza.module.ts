import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { PizzaCreatorComponent } from './containers/pizza-creator.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';

import { PizzaService } from './pizza.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
  ],
  declarations: [
    PizzaCreatorComponent,
    ToppingsSelectorComponent,
    PizzaFormComponent,
    PizzaNameComponent
  ],
  providers: [
   PizzaService
  ],
  exports: [
    PizzaCreatorComponent
  ]
})
export class PizzaModule {}