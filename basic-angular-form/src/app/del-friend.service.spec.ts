import { TestBed } from '@angular/core/testing';

import { DelFriendService } from './del-friend.service';

describe('DelFriendService', () => {
  let service: DelFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
