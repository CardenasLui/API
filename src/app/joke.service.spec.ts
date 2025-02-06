import { TestBed } from '@angular/core/testing';

import { ChuckService } from './joke.service';

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  }
  );
}
);