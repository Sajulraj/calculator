import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimenumbersComponent } from './primenumbers.component';

describe('PrimenumbersComponent', () => {
  let component: PrimenumbersComponent;
  let fixture: ComponentFixture<PrimenumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimenumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimenumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
