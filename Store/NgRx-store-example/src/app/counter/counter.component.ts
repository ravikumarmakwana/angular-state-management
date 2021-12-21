import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, setValue } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store:Store<{count: number}>) { 
    this.counter = this.store.select('count');
  }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }

  setValue(form: NgForm){
    this.store.dispatch(setValue({count : form.value.value}));
  }
}
