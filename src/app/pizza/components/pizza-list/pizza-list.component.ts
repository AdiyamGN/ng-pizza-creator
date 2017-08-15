import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../pizza.interface';

@Component({
  selector: 'pizza-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-list.component.scss'],
  templateUrl: './pizza-list.component.html'
})
export class PizzaListComponent {

  @Input()
  pizzas: Pizza[];

}
