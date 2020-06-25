import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl = 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg';

post = {
  title     :  'formation',
  body      :  'hassan ibtmina',
  isActive  :  false

};

// courses = ['camelCase' , 'PascaleCase' , 'snake_case' , 'kabab-case'];
viewCourse = 'Larael';
  Laravel: any;
  Angular: any;
  Symfony: any;
  num1: number;
  num2: number;
  buildTool: any;
  courses;
  lowercase: any;
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
  lead() {
   this.courses = [
      {id: 1, title: 'Laravel'},
      {id: 2, title: 'Angular'},
      {id: 3, title: 'VueJS'},
      {id: 4, title: 'Symfony'},
      {id: 5, title: 'AdonisJS'},
    ];
  }

  myFunction($args) {
   console.log($args);
  }

  AddCourse() {
       this.courses.push({id: 5, title: 'React'});
  }

  DeleteCourse(course) {
    // @ts-ignore
   const index = this.courses.indexOf(course);
   this.courses.splice(index, 1);

  }

  EditCourse(course) {
    course.title = 'updated';
  }


}
