import { Component, Input } from '@angular/core';
import { Card } from './card/card';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {
  @Input() cardRows: Card[][] | undefined;
}
