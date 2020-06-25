import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GithubfollowersComponent} from './githubfollowers/githubfollowers.component';
import {ProfileFollowerComponent} from './profile-follower/profile-follower.component';
import {PostsComponent} from './posts/posts.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotComponent} from './page-not/page-not.component';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'followers',
    component: GithubfollowersComponent
  },
  { path: 'followers/:id/:username',
    component:  ProfileFollowerComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: '**',
    component: PageNotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule{ }
