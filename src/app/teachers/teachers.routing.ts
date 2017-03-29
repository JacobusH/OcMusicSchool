import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

import {TeachersComponent} from './teachers.component';
import {TeachersDetailsComponent} from './teachers-details.component';
// import {MessagesComponenet} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';

// import {AuthGuard} from '../auth-guard.service';

export const routingTeachers:ModuleWithProviders = RouterModule.forChild([
    {
        path: 'teachers/:id', 
        component: TeachersDetailsComponent
        // canActivate: [AuthGuard]
    },
    {
        path: 'teachers', 
        component: TeachersComponent
    }

]);
