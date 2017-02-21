import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {AuthService} from '../auth.service';
// import {FormComponent} from '../prevent-unsaved-changes-guard.service';
// import {MessagesService} from '../messages.service';
import {FormGroup} from '@angular/forms';

@Component ({
    template: `
       <h1>Home</h1>
    `
})
export class HomeComponent {
    messages;
    
    // constructor(messagesService: MessagesService)
    // {
    //     this.messages = messagesService.getMessages();
    // }



}