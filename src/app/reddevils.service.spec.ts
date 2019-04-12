import { TestBed, inject } from '@angular/core/testing';

import { ReddevilsService } from './reddevils.service';

describe('ReddevilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReddevilsService]
    });
  });

  it('should be created', inject([ReddevilsService], (service: ReddevilsService) => {
    expect(service).toBeTruthy();
  }));
});
