import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../card-display/card/card';
import { CardDisplayComponent } from '../card-display/card-display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, CardDisplayComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardRows: Card[][] = [
    [{
      h1: "Custom LED Boards",
      p: "Parties, Greek Life, Advertising, et al",
      route: "/custom-led",
      imgSrc: "assets/img/led-board.jpg",
      imgAlt: "Custom LED boards: A poster board with LED strips and decorations"
    },
    {
      h1: "Marching Band Arrangements",
      p: "Inquire today!",
      route: "/music",
      imgSrc: "assets/img/music.png",
      imgAlt: "Snippet of marching band music"
    },
    {
      h1: "Isaac's Portfolio",
      p: "Click to see projects",
      route: "/portfolio",
      imgSrc: "assets/img/isaac.jpg",
      imgAlt: "Picture of Isaac Thompson"
    }]
  ];
}
