import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Pipe1Pipe } from './pipe1/pipe1.pipe';
import { Pipe3Pipe } from './pipe3/pipe3.pipe';
import { Pipe2Pipe } from './pipe2/pipe2.pipe';
import { Pipe4Pipe } from './pipe4/pipe4.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe,
    Pipe3Pipe,
    Pipe2Pipe,
    Pipe4Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
