import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { PizzaCreatorComponent } from './containers/pizza-creator.component';

import { PizzaService } from './pizza.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    PizzaCreatorComponent
  ],
  declarations: [
    
  ],
  providers: [
   PizzaService
  ],
  exports: [
    PizzaCreatorComponent
  ]
})
export class PizzaModule {}