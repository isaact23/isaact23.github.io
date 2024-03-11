import { Component, Input, OnChanges } from '@angular/core';
import { Card } from './card';
import { NgIf } from '@angular/common';

const DEFAULT_STYLE = "width: 100%;";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges {

  @Input() card: Card | undefined;
  style = DEFAULT_STYLE;

  ngOnChanges(): void {
    if (this.card?.pixelated) {
      this.style = DEFAULT_STYLE + " image-rendering: pixelated;"
    } else {
      this.style = DEFAULT_STYLE;
    }
  }
}
