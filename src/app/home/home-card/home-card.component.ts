import { Component, Input } from '@angular/core';
import { HomeCard } from './home-card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() card: HomeCard | undefined;
}
