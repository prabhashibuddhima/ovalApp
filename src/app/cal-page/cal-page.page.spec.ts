import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalPagePage } from './cal-page.page';

describe('CalPagePage', () => {
  let component: CalPagePage;
  let fixture: ComponentFixture<CalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
