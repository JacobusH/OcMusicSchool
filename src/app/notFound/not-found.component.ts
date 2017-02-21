import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {AuthService} from '../auth.service';
// import {FormComponent} from '../prevent-unsaved-changes-guard.service';
// import {MessagesService} from '../messages.service';
import {FormGroup} from '@angular/forms';

@Component ({
    template: `
       <h1>Page Not Found</h1>
       <p>We could not find what you were looking for</p>
    `
})
export class NotFoundComponent {
    messages;
    
    // constructor(messagesService: MessagesService)
    // {
    //     this.messages = messagesService.getMessages();
    // }



}