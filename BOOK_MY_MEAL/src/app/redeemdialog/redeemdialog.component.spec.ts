import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemdialogComponent } from './redeemdialog.component';

describe('RedeemdialogComponent', () => {
  let component: RedeemdialogComponent;
  let fixture: ComponentFixture<RedeemdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedeemdialogComponent]
    });
    fixture = TestBed.createComponent(RedeemdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
