import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryLoginComponent } from './factory-login.component';

describe('FactoryLoginComponent', () => {
  let component: FactoryLoginComponent;
  let fixture: ComponentFixture<FactoryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
