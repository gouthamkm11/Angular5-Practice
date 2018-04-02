import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { RegisterComponent } from './register/register.component';
import { StudentemployeeComponent } from './studentemployee/studentemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentprofileComponent,
    RegisterComponent,
    StudentemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
