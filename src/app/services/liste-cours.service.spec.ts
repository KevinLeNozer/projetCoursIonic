import { TestBed } from '@angular/core/testing';

import { ListeCoursService } from './liste-cours.service';

describe('ListeCoursService', () => {
  let service: ListeCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
