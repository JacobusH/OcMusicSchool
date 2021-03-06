import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersDetailsComponent } from './teachers/teachers-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import {routingTeachers} from './teachers/teachers.routing';


export const routing:ModuleWithProviders = RouterModule.forRoot([
  { path: '',      component: HomeComponent },
  { path: 'faq',  component: FaqComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'teachers', component: TeachersComponent },
  // { path: 'teachers/:id', component: TeachersDetailsComponent},
  { path: 'teachers', component: TeachersComponent,
    children: [
      {path: ':id', component: TeachersDetailsComponent}
    ]},
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**',    component: NotFoundComponent },
]);