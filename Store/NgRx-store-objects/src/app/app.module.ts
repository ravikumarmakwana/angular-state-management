import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coordinateReducer } from './shared/coordinate.reducer';
import { ShowCoordinateComponent } from './show-coordinate/show-coordinate.component';
import { AlterCoordinateComponent } from './alter-coordinate/alter-coordinate.component';
import { SetCoordinateComponent } from './set-coordinate/set-coordinate.component';
import { ResetCoordinateComponent } from './reset-coordinate/reset-coordinate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowCoordinateComponent,
    AlterCoordinateComponent,
    SetCoordinateComponent,
    ResetCoordinateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ coordinate: coordinateReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
