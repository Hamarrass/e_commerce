import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowersComponent } from './githubfollowers.component';

describe('GithubfollowersComponent', () => {
  let component: GithubfollowersComponent;
  let fixture: ComponentFixture<GithubfollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubfollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
