import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DummyComponentComponent} from './dummy-component/dummy-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DummyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCommerce_angular';
}
