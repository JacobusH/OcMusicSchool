import { AlertModule} from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'ng2-materialize';
import { AngularFireModule } from 'angularfire2';

import {routing} from './app.routes';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersDetailsComponent } from './teachers/teachers-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import {TeacherService} from './teachers/teacher.service';

export const firebaseConfig = {
    apiKey: "AIzaSyCFToauOWTjn55Oc2e6L1YkCt5ZGzbMXV8",
    authDomain: "ocmusicschool-11817.firebaseapp.com",
    databaseURL: "https://ocmusicschool-11817.firebaseio.com",
    projectId: "ocmusicschool-11817",
    storageBucket: "ocmusicschool-11817.appspot.com",
    messagingSenderId: "202663817255"
  };

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    GalleryComponent,
    HomeComponent,
    NotFoundComponent,
    TeachersComponent,
    TeachersDetailsComponent,
    TestimonialsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    routing
  ],
  providers: [TeacherService, MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
