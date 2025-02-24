import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelorderdialogComponent } from './cancelorderdialog.component';

describe('CancelorderdialogComponent', () => {
  let component: CancelorderdialogComponent;
  let fixture: ComponentFixture<CancelorderdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelorderdialogComponent]
    });
    fixture = TestBed.createComponent(CancelorderdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
