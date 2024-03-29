import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPredictionComponent } from './supply-prediction.component';

describe('SupplyPredictionComponent', () => {
  let component: SupplyPredictionComponent;
  let fixture: ComponentFixture<SupplyPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
