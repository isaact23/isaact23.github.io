import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomLedComponent } from './custom-led/custom-led.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'custom-led', component: CustomLedComponent}
];
