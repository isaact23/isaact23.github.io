import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCard } from './home-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: HomeCard[] = [
    {
      imgSrc: "assets/img/isaac.jpg",
      imgAlt: "Isaac Thompson",
      h1: "Isaac Thompson",
      h2: "isaact.net",
      p: "Welcome! Feel free to browse my projects and websites."
    }
  ];
}
