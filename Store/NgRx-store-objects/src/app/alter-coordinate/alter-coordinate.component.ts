import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementXCoordinate, incrementYCoordinate, reduceXCoordinate, reduceYCoordinate } from '../shared/coordinate.actions';
import { Coordinate } from '../shared/coordinate.model';

@Component({
  selector: 'app-alter-coordinate',
  templateUrl: './alter-coordinate.component.html'
})
export class AlterCoordinateComponent implements OnInit {

  constructor(private store: Store<{coordinate: Coordinate}>) { }

  ngOnInit(): void {
  }

  increaseXCoordinate(){
    this.store.dispatch(incrementXCoordinate());
  }

  increaseYCoordinate(){
    this.store.dispatch(incrementYCoordinate());
  }

  decrementXCoordinate(){
    this.store.dispatch(reduceXCoordinate());
  }

  decrementYCoordinate(){
    this.store.dispatch(reduceYCoordinate());
  }
}
