import { Routes } from '@angular/router';
import {DummyComponentComponent} from './dummy-component/dummy-component.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    component: DummyComponentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:username',
    component: AboutComponent,
  }
];
