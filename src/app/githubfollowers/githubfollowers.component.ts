import { Component, OnInit } from '@angular/core';
import {GithubfollowersService} from '../services/githubfollowers.service';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})


export class GithubfollowersComponent implements OnInit {
  brahimfollowers: any[] = [];
  constructor(private githubfollowersService: GithubfollowersService) { }

  ngOnInit(): void {
    this.getFollowers();
  }
  getFollowers() {
    this.githubfollowersService.getFollowers()
      .subscribe(response => {
        // @ts-ignore
        this.brahimfollowers = response;

      });
  }

}
// , error => {
//   alert('stop');
//   console.log(error);
// }
