import { TestBed, inject } from '@angular/core/testing';

import { AdmindataService } from './admindata.service';

describe('AdmindataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmindataService]
    });
  });

  it('should be created', inject([AdmindataService], (service: AdmindataService) => {
    expect(service).toBeTruthy();
  }));
});
