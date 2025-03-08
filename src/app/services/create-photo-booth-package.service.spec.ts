import { TestBed } from '@angular/core/testing';

import { CreatePhotoBoothPackageService } from './create-photo-booth-package.service';

describe('CreatePhotoBoothPackageService', () => {
  let service: CreatePhotoBoothPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePhotoBoothPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
