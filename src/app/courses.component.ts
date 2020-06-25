//  export to be visible for the  others components
// this component has options and informations , we put it on a dicorater
// it is name of Compenent
// this dicorator has the objects and the objects has the proprities
// modul contient  the component
// component has a dicorator and  and class and  imortation of dicorator
// selector is  a component's  identification

import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  // tslint:disable-next-line:component-selector
    selector : 'courses',
  // templateUrl : './courses.component.html'
  // []  dome
    template : `
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item">{{course.titre | uppercase | lowercase}}</li>
      <li class="list-group-item">{{course.avis |  number:'2.3-3'}}</li>
      <li class="list-group-item">{{course.participants}}</li>
      <li class="list-group-item">{{course.prix | currency:'CAD':'symbol':'.3-3'}}</li>
      <li class="list-group-item">{{course.publicationDate | date:'Y-M-D'}}</li>
    </ul>
  </div>

    `
})

export class  CoursesComponent{

course = {
 titre: 'i have to learn somthing ',
 avis : '4.45475',
 participants: 136,
 prix: 950.32,
 publicationDate: new Date(2017 , 11 , 21)

  };

  //
  // getTitle(){
  //   return this.title;
  // }



}
