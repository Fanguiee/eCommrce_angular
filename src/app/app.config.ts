import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {MyFirstServiceService} from './services/my-first-service.service';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {ProductService} from './services/api/products/product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    MyFirstServiceService,
    ProductService
  ],
};
