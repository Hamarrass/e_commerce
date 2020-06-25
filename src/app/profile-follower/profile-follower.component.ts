 import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }
  id: number;
  username: string;
  type: string;
  page: any;
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.username = params.get('username');
    //   this.id = +params.get('id');
    // });
    // this.route.queryParamMap.subscribe(queryParams => {
    //   this.type = queryParams.get('type');
    // });
    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.page = this.route.snapshot.queryParamMap.get('page');

  }

}
