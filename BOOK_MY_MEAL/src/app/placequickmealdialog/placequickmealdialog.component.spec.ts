import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacequickmealdialogComponent } from './placequickmealdialog.component';

describe('PlacequickmealdialogComponent', () => {
  let component: PlacequickmealdialogComponent;
  let fixture: ComponentFixture<PlacequickmealdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacequickmealdialogComponent]
    });
    fixture = TestBed.createComponent(PlacequickmealdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
