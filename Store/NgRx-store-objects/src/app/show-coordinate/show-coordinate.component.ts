import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinate } from '../shared/coordinate.model';

@Component({
  selector: 'app-show-coordinate',
  templateUrl: './show-coordinate.component.html'
})
export class ShowCoordinateComponent implements OnInit {
  
  coordinates: Observable<Coordinate>;
  x: number = 0;
  y: number = 0;

  constructor(private store:Store<{ coordinate: Coordinate }>) { 
    this.coordinates = this.store.select('coordinate');
  }

  ngOnInit(): void {
    this.coordinates.subscribe(response => {
      this.x = response.x;
      this.y = response.y;
    });
  }
}
