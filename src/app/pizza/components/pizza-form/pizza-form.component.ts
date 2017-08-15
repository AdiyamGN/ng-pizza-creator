import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { Pizza, Topping } from '../../pizza.interface';
import { ToppingsValidator } from '../../toppings.validator';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent {

  @Input()
  toppings: Topping[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: this.fb.array([])
  }, {
    validator: ToppingsValidator
  });

  constructor(
    private fb: FormBuilder
  ) {}

  get control() {
    return this.form.get('toppings') as FormArray;
  }

  addTopping(topping: Topping) {
    this.control.push(new FormControl(topping));
  }

  removeTopping(index: number) {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping) {
    const index = this.control.value.indexOf(topping);
    if (!!~index) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}
