import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MessageDetailsComponent} from '../message-details/message-details.component';
import {MyFirstServiceService} from '../services/my-first-service.service';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-dummy-component',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailsComponent,
  ],
  templateUrl: './dummy-component.component.html',
  styleUrl: './dummy-component.component.scss'
})
export class DummyComponentComponent {
  name = "";
  email ="";
  message="";
  isSubmitted:Boolean = false;
  messages:Array<any> = [];

  constructor(private service:MyFirstServiceService) {
    this.messages = this.service.getMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      'name':this.name,
      'email':this.email,
      'message':this.message,
    })
    console.log("messages:",this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }

  protected readonly NgForm = NgForm;
}
