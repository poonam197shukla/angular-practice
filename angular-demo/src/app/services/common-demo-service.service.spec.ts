import { TestBed } from '@angular/core/testing';

import { CommonDemoServiceService } from './common-demo-service.service';

describe('CommonDemoServiceService', () => {
  let service: CommonDemoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonDemoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
