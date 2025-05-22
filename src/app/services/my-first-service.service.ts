import { Injectable } from '@angular/core';

@Injectable(
)
export class MyFirstServiceService {

  messages: Array<any>=[];

  init(): void {
    this.insert({
      name:"Yasin",
      email:'aamail',
      message:"Hello World!"
    });
    this.insert({
      name:"Jasmin",
      email:'jjmail',
      message:"Yo World!"
    });
    this.insert({
      name:"Nano",
      email:'wmail',
      message:"Hey World!"
    });
  }
  constructor() {
    this.init();
  }
  insert(message:{name: string,email:string, message: string}): void {
    this.messages.push(message);
  }
  getMessages():any[] {
    return this.messages;
  }
  deleteMessage(index: number):void {
    this.messages.splice(index, 1);
  }
}
