import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyInputComponent } from './supply-input.component';

describe('SupplyInputComponent', () => {
  let component: SupplyInputComponent;
  let fixture: ComponentFixture<SupplyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
