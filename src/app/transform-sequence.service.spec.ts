import { TestBed, inject } from '@angular/core/testing';

import { TransformSequenceService } from './transform-sequence.service';

describe('TransformSequenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformSequenceService]
    });
  });

  it('should be created', inject([TransformSequenceService], (service: TransformSequenceService) => {
    expect(service).toBeTruthy();
  }));
});
