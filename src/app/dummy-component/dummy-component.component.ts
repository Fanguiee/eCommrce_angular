import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dummy-component',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './dummy-component.component.html',
  styleUrl: './dummy-component.component.scss'
})
export class DummyComponentComponent {
  name = "";
  email ="";
  isSubmitted:Boolean = false;

  onSubmit() {
    this.isSubmitted = true;
  }
}
