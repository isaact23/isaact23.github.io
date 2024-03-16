import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomLedComponent } from './custom-led/custom-led.component';
import { MusicComponent } from './music/music.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'custom-led', component: CustomLedComponent},
  {path: 'music', component: MusicComponent}
];
