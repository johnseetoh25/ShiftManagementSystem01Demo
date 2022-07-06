import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftHandoverPageComponent } from './shift-handover-page.component';

describe('ShiftHandoverPageComponent', () => {
  let component: ShiftHandoverPageComponent;
  let fixture: ComponentFixture<ShiftHandoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftHandoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftHandoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
