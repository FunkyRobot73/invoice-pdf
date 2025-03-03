import { TestBed } from '@angular/core/testing';

import { AddPhotoBoothQuoteService } from './add-photo-booth-quote.service';

describe('AddPhotoBoothQuoteService', () => {
  let service: AddPhotoBoothQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPhotoBoothQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
