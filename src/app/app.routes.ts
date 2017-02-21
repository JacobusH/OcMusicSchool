import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './notFound/not-found.component';


export const routing:ModuleWithProviders = RouterModule.forRoot([
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
//   { path: 'detail', loadChildren: './+detail#DetailModule'},
//   { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NotFoundComponent },
]);