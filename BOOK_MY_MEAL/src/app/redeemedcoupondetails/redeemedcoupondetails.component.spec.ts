import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemedcoupondetailsComponent } from './redeemedcoupondetails.component';

describe('RedeemedcoupondetailsComponent', () => {
  let component: RedeemedcoupondetailsComponent;
  let fixture: ComponentFixture<RedeemedcoupondetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedeemedcoupondetailsComponent]
    });
    fixture = TestBed.createComponent(RedeemedcoupondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
