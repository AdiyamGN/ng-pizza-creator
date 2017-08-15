import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-button',
  styleUrls: ['pizza-button.component.scss'],
  templateUrl: './pizza-button.component.html'
})
export class PizzaButtonComponent {

  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }

}
