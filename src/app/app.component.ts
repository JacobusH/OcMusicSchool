import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'underscore';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  teachers: FirebaseListObservable<any>;


  constructor(af: AngularFire) {
       this.teachers = af.database.list('/teachers');

       console.log(this.teachers);
    }

}
