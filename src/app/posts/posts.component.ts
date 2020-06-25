import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  post = {
    id     : 0,
    title  : '',
    body   : '',
    userId : 0
  };
  state = true;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts()
      .subscribe(response => {
        // @ts-ignore
        this.posts = response;
      }, error => {
        alert('stop');
        console.log(error);
        });
  }
  editPost(post) {
    this.post = post;
    this.state = false;
  }
  createPost() {
    // this.http.post('https://jsonplaceholder.typicode.com/posts', this.post)
    this.postService.createPost(this.post)
      .subscribe(response => {
        // @ts-ignore
        this.post.id = response.id;
        this.posts.push(this.post);
      },
        (error: Response) => {
          if (error.status === 400){
            alert('Meri de vérifié vos information');
          }
          else {
            alert('erreur inattendue');
            console.log(error);
          }
        }
      );
  }




  updatePost() {
    // this.http.put('https://jsonplaceholder.typicode.com/posts/' + this.post.id, this.post)
    this.postService.updatePost(this.post)
      .subscribe(response => {
        this.post = {
          id     : 0,
          title  : '',
          body   : '',
          userId : 0
        };
        this.state = true;
      },
        error => {
            alert('Erreur  inattendue');
            console.log(error);
        }
      );
  }

  deletePost(post) {
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/' + post.id)
    this.postService.deletePost(post)

      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
        (error: Response) => {
          if (error.status === 404){
            alert('Meri de vérifié vos information');
          }
          else {
            alert('erreur inattendue');
            console.log(error);
          }
        });
  }
}
