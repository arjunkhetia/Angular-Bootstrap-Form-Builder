import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBsFormBuilderComponent } from './ng-bs-form-builder.component';

describe('NgBsFormBuilderComponent', () => {
  let component: NgBsFormBuilderComponent;
  let fixture: ComponentFixture<NgBsFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBsFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBsFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
