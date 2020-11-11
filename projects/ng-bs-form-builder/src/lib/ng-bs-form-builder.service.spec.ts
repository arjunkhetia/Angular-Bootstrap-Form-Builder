import { TestBed } from '@angular/core/testing';

import { NgBsFormBuilderService } from './ng-bs-form-builder.service';

describe('NgBsFormBuilderService', () => {
  let service: NgBsFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBsFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
