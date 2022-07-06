import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingApprovelFormPageComponent } from './incoming-approvel-form-page.component';

describe('IncomingApprovelFormPageComponent', () => {
  let component: IncomingApprovelFormPageComponent;
  let fixture: ComponentFixture<IncomingApprovelFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingApprovelFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingApprovelFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
