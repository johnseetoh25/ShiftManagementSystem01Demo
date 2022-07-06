import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingApprovalListPageComponent } from './outgoing-approval-list-page.component';

describe('OutgoingApprovalListPageComponent', () => {
  let component: OutgoingApprovalListPageComponent;
  let fixture: ComponentFixture<OutgoingApprovalListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingApprovalListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingApprovalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
