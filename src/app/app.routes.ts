import { Routes } from '@angular/router';
import {DummyComponentComponent} from './dummy-component/dummy-component.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';

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
  },
  {
    path:'products',
    component:ProductsComponent,
  },
];
