import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingApprovalFormPageComponent } from './outgoing-approval-form-page.component';

describe('OutgoingApprovalFormPageComponent', () => {
  let component: OutgoingApprovalFormPageComponent;
  let fixture: ComponentFixture<OutgoingApprovalFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingApprovalFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingApprovalFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
