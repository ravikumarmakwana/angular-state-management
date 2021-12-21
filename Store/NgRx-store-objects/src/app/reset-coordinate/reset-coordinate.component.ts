import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetCoordinate } from '../shared/coordinate.actions';
import { Coordinate } from '../shared/coordinate.model';

@Component({
  selector: 'app-reset-coordinate',
  templateUrl: './reset-coordinate.component.html'
})
export class ResetCoordinateComponent implements OnInit {

  constructor(private store: Store<{ coordinate: Coordinate }>) { }

  ngOnInit(): void {
  }

  resetCoordinates(){
    this.store.dispatch(resetCoordinate());
  }

}
