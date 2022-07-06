import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingApprovalFormPageComponent } from './incoming-approval-form-page.component';

describe('IncomingApprovalFormPageComponent', () => {
  let component: IncomingApprovalFormPageComponent;
  let fixture: ComponentFixture<IncomingApprovalFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingApprovalFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingApprovalFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
