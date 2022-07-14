import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftManagementsTableComponent } from './shift-managements-table.component';

describe('ShiftManagementsTableComponent', () => {
  let component: ShiftManagementsTableComponent;
  let fixture: ComponentFixture<ShiftManagementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftManagementsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftManagementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
