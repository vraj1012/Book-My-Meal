import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacebulkorderComponent } from './placebulkorder.component';

describe('PlacebulkorderComponent', () => {
  let component: PlacebulkorderComponent;
  let fixture: ComponentFixture<PlacebulkorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacebulkorderComponent]
    });
    fixture = TestBed.createComponent(PlacebulkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
