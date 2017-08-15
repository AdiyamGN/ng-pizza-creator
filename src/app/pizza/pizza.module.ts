import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PizzaService } from './pizza.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    
  ],
  providers: [
   PizzaService
  ],
  exports: [
    
  ]
})
export class PizzaModule {}