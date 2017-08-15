import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaButtonComponent } from './pizza-button.component';

describe('PizzaButtonComponent', () => {
  let component: PizzaButtonComponent;
  let fixture: ComponentFixture<PizzaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
