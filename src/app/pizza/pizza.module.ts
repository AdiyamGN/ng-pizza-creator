import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { PizzaCreatorComponent } from './containers/pizza-creator.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';

import { PizzaService } from './pizza.service';
import { PizzaSelectedComponent } from './components/pizza-selected/pizza-selected.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
  ],
  declarations: [
    PizzaCreatorComponent,
    ToppingsSelectorComponent,
    PizzaFormComponent,
    PizzaNameComponent,
    PizzaSelectedComponent,
    PizzaButtonComponent,
    PizzaListComponent
  ],
  providers: [
   PizzaService
  ],
  exports: [
    PizzaCreatorComponent
  ]
})
export class PizzaModule {}