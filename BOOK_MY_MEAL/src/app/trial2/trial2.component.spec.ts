import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial2Component } from './trial2.component';

describe('Trial2Component', () => {
  let component: Trial2Component;
  let fixture: ComponentFixture<Trial2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Trial2Component]
    });
    fixture = TestBed.createComponent(Trial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
