
import {CoursesService} from './courses.service';
import {EmailService} from './email.service';
import {CoursesComponent} from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import {GithubfollowersService} from './services/githubfollowers.service';
import {RoutingModule} from './routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PageNotComponent } from './page-not/page-not.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    PostsComponent,
    GithubfollowersComponent,
    HomeComponent,
    ProfileFollowerComponent,
    PageNotComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [CoursesService, EmailService, PostService, GithubfollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
