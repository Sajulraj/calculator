import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditioncomponentComponent } from './additioncomponent.component';

describe('AdditioncomponentComponent', () => {
  let component: AdditioncomponentComponent;
  let fixture: ComponentFixture<AdditioncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditioncomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
