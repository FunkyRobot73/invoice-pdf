import { TestBed } from '@angular/core/testing';

import { AddCustService } from './add-cust.service';

describe('AddCustService', () => {
  let service: AddCustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
