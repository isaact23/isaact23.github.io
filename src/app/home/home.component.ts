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
  cardRows: HomeCard[][] = [
    [{
      h1: "Isaac Thompson",
      h2: "isaact.net",
      p: "Welcome! Feel free to browse my projects and websites.",
      imgSrc: "assets/img/isaac.jpg",
      imgAlt: "Picture of Isaac Thompson"
    },
    {
      h1: "Custom LED Boards",
      p: "Parties, Greek Life, Advertising, et al",
      a: "https://isaact.net/custom-led",
      imgSrc: "assets/img/led-board.jpg",
      imgAlt: "Custom LED boards: A poster board with LED strips and decorations"
    },
    {
      h1: "its-a-me",
      p: "A Halloween Mario game",
      a: "https://github.com/isaact23/its-a-me",
      imgSrc: "assets/img/its-a-me.jpg",
      imgAlt: "A Mario-style Halloween setup with colored lights"
    },
    {
      a: "https://isaact.net/gba-helper",
      imgSrc: "assets/img/gba-helper.png",
      imgAlt: "Icon for GBA Helper, which is an app to help make games for the Game Boy Advance",
      pixelated: true
    }],
    [{
      h1: "Cavemen",
      p: "An underground horror game",
      a: "https://shufflesninja.itch.io/cavemen",
      imgSrc: "assets/img/cavemen.png",
      imgAlt: "A gloomy underground cave"
    },
    {
      h1: "squidgame",
      p: "A real-life version of Glass Stepping Stones",
      a: "https://github.com/isaact23/squidgame",
      imgSrc: "assets/img/squidgame.png",
      imgAlt: "Neon-LED pressure plates on the ground emulating Squidgame's glass stepping stones"
    },
    {
      h1: "Cats vs Rats GBA",
      a: "https://github.com/isaact23/catsvsratsgba",
      imgSrc: "assets/img/catsvsratsgba.png",
      imgAlt: "GameBoy Advance with Cats vs. Rats custom game"
    },
    {
      h1: "Cats vs Rats",
      p: "A game jam game",
      a: "https://gaming-project-at-vt.itch.io/cats-vs-rats",
      imgSrc: "assets/img/catsvsrats.png",
      imgAlt: "Tower defense game with cats and rats"
    }]
  ];
}
