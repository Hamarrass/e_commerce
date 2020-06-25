import { TestBed } from '@angular/core/testing';

import { GithubfollowersService } from './githubfollowers.service';

describe('GithubfollowersService', () => {
  let service: GithubfollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubfollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
