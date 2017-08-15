import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSelectedComponent } from './pizza-selected.component';

describe('PizzaSelectedComponent', () => {
  let component: PizzaSelectedComponent;
  let fixture: ComponentFixture<PizzaSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
