import { TestBed, inject } from '@angular/core/testing';

import { SubredditsService } from './subreddits.service';

describe('SubredditsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubredditsService]
    });
  });

  it('should be created', inject([SubredditsService], (service: SubredditsService) => {
    expect(service).toBeTruthy();
  }));
});
