import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarBtn } from './toolbar-btn/toolbar.btn';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  btns: ToolbarBtn[] = [
    {
      p: "isaact.net",
      route: "/"
    },
    {
      p: "Home",
      route: "/"
    },
    {
      p: "Custom LED",
      route: "/custom-led"
    },
    {
      p: "Music",
      route: "/music"
    },
    {
      p: "Portfolio",
      route: "/portfolio"
    }
  ]
}
