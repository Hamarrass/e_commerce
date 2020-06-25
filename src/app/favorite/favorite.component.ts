import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // tslint:disable-next-line:no-inputs-metadata-property

})
export class FavoriteComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-input-rename
 @Input('isA') isActive    = true;
  // tslint:disable-next-line:no-output-native
 @Output() change = new EventEmitter();

  table = ['hasan' , 'hmarrass' , 'Mohcine' , 'Hamarrass'];
         ngOnInit(): void {
  }
  onClick() {
    // tslint:disable-next-line:triple-equals
   this.isActive = this.isActive != true;

   this.change.emit(this.isActive );
  }
}
