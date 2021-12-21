import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setXYCoordinate } from '../shared/coordinate.actions';
import { Coordinate } from '../shared/coordinate.model';

@Component({
  selector: 'app-set-coordinate',
  templateUrl: './set-coordinate.component.html'
})
export class SetCoordinateComponent implements OnInit {

  constructor(private store: Store<{ coordinate: Coordinate }>) { }

  ngOnInit(): void {
  }

  setCoordinates(form: NgForm){
    this.store.dispatch(
      setXYCoordinate({
        coordinate : {
          x: form.value.x,
          y: form.value.y
        }
      })
    );
  }
}
