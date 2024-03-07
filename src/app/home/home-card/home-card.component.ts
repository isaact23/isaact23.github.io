import { Component, Input, OnChanges } from '@angular/core';
import { HomeCard } from './home-card';
import { NgIf } from '@angular/common';

const DEFAULT_STYLE = "width: 100%;";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent implements OnChanges {

  @Input() card: HomeCard | undefined;
  style = DEFAULT_STYLE;

  ngOnChanges(): void {
    if (this.card?.pixelated) {
      this.style = DEFAULT_STYLE + " image-rendering: pixelated;"
    } else {
      this.style = DEFAULT_STYLE;
    }
  }
}
