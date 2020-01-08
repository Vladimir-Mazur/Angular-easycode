import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPhoto } from './blocks/my-photo/my-photo.component';
import { Education } from './blocks/education/education.component';
import { Work } from './blocks/work/work.component';
import { Contact } from './blocks/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPhoto,
    Education,
    Work,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }