import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DummyComponentComponent} from './dummy-component/dummy-component.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCommerce_angular';
}
