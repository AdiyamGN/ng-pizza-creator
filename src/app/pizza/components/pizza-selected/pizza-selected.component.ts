import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Topping } from '../../pizza.interface';

@Component({
  selector: 'pizza-selected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-selected.component.scss'],
  templateUrl: './pizza-selected.component.html'
})
export class PizzaSelectedComponent {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }

}
