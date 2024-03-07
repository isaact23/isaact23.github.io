import { Component, Input, OnChanges } from '@angular/core';
import { HomeCard } from './home-card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent implements OnChanges {
  @Input() card: HomeCard | undefined;
  style = "width: 100%";

  ngOnChanges(): void {
    if (this.card?.pixelated) {
      this.style = "width: 100%; image-rendering: pixelated;"
    } else {
      this.style = "width: 100%;";
    }
  }
}
