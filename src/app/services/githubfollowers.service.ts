import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubfollowersService {

  constructor(private http: HttpClient) { }

    private url = 'https://api.github.com/users/IDBRAHIMDEV/followers' ;
    getFollowers(){
      return this.http.get(this.url);
    }
}
