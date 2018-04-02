import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent } from './01header/header.component'
import { bodyComponent } from './02body/body.component'

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    bodyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }