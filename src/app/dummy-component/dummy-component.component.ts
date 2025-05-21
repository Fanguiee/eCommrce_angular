import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-dummy-component',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
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

  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      'name':this.name,
      'email':this.email,
      'message':this.message,
    })
    console.log("messages:",this.messages);
  }
}
