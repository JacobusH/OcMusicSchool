import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response, ResponseOptions} from '@angular/http';
import * as _ from 'underscore';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {Teacher} from './teacher.entity';
import {TeacherService} from './teacher.service';

@Component({
    template: `
        <h1>Teachers Details {{id}}</h1>
        <h2>{{name}}</h2>
        <p>{{summary}}</p>
    `,
    providers: [TeacherService]
})
export class TeachersDetailsComponent implements OnInit, OnDestroy
{
    id;
    name;
    subscription;
    teachers: FirebaseListObservable<any>;

    constructor(private _route: ActivatedRoute, af: AngularFire)
    {
        this.teachers = af.database.list('/teachers/');        
    }

    ngOnInit()
    {
        this.subscription = this._route.params.subscribe(params => {
            this.id = params["id"];
        });

        
        
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }

}