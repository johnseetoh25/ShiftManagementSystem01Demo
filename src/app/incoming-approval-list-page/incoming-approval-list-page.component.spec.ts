import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingApprovalListPageComponent } from './incoming-approval-list-page.component';

describe('IncomingApprovalListPageComponent', () => {
  let component: IncomingApprovalListPageComponent;
  let fixture: ComponentFixture<IncomingApprovalListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingApprovalListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingApprovalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
