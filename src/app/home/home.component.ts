import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCard } from './home-card/home-card';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, HomeCardComponent],
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
    },
    {
      imgSrc: "assets/img/led-board.jpg",
      imgAlt: "Custom LED boards: A poster board with LED strips and decorations",
      h1: "Custom LED Boards",
      p: "Parties, Greek Life, Advertising, et al",
      a: "https://isaact.net/custom-led"
    },
    {
      imgSrc: "assets/img/its-a-me.jpg",
      imgAlt: "A Mario-style Halloween setup with colored lights",
      h1: "its-a-me",
      p: "A Halloween Mario game",
      a: "https://github.com/isaact23/its-a-me"
    }
  ];
}
