import {Component, NgZone, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response, ResponseOptions} from '@angular/http';
import * as _ from 'underscore';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {Teacher} from './teacher.entity';
import {TeacherService} from './teacher.service';

@Component({
    template: `
        <h1>{{ (teacher | async)?.name }}  </h1>
        <p>{{ (teacher | async)?.summary }}  </p>
    `,
    providers: [TeacherService]
})
export class TeachersDetailsComponent  implements OnInit, OnDestroy
{
    id;
    name;
    subscription;
    teacher: FirebaseObjectObservable<any>;
    af : AngularFire;

    constructor(private _route: ActivatedRoute, private zone:NgZone, af: AngularFire)
    {
        this. af = af;      
    }

    ngOnInit()
    {
        this.subscription = this._route.params.subscribe(params => {
            this.id = params["id"];
        })

        this._route.params.subscribe((params) => {
            let id = params["id"];
            this.teacher = this.af.database.object('/teachers/' + this.id); 
        })
        
        
    }

    //ngOnDestroy not fired when going to child routes defined as a group
    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }

}