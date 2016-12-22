import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CountDown} from "../node_modules/angular2-simple-countdown/countdown"

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule ],
  declarations: [ AppComponent, CountDown ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
