import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-name.component.scss'],
  templateUrl: './pizza-name.component.html'
})
export class PizzaNameComponent {

  @Input()
  parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}
