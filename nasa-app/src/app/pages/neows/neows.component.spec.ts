/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeowsComponent } from './neows.component';

describe('NeowsComponent', () => {
  let component: NeowsComponent;
  let fixture: ComponentFixture<NeowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
