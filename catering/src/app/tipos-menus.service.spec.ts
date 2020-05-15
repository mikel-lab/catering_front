import { TestBed } from '@angular/core/testing';

import { TiposMenusService } from './tipos-menus.service';

describe('TiposMenusService', () => {
  let service: TiposMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
