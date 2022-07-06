import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShiftHandoverPageComponent } from './edit-shift-handover-page.component';

describe('EditShiftHandoverPageComponent', () => {
  let component: EditShiftHandoverPageComponent;
  let fixture: ComponentFixture<EditShiftHandoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShiftHandoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShiftHandoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
