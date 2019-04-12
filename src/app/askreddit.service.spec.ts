import { TestBed, inject } from '@angular/core/testing';

import { AskredditService } from './askreddit.service';

describe('AskredditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskredditService]
    });
  });

  it('should be created', inject([AskredditService], (service: AskredditService) => {
    expect(service).toBeTruthy();
  }));
});
