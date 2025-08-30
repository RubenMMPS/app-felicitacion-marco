import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FelicitacionMarcoComponent } from './felicitacion-marco/felicitacion-marco.component';

const routes: Routes = [{ path: '', component: FelicitacionMarcoComponent }];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
