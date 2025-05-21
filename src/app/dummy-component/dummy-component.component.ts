import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dummy-component',
  imports: [
    FormsModule
  ],
  templateUrl: './dummy-component.component.html',
  styleUrl: './dummy-component.component.scss'
})
export class DummyComponentComponent {
  name = "";
  email ="";

  onSubmit() {

  }
}
