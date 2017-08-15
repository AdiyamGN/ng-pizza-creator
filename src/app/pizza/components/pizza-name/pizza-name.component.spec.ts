import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNameComponent } from './pizza-name.component';

describe('PizzaNameComponent', () => {
  let component: PizzaNameComponent;
  let fixture: ComponentFixture<PizzaNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
