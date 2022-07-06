import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShiftHandoverPageComponent } from './add-shift-handover-page.component';

describe('AddShiftHandoverPageComponent', () => {
  let component: AddShiftHandoverPageComponent;
  let fixture: ComponentFixture<AddShiftHandoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShiftHandoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShiftHandoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
