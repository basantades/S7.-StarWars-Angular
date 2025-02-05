import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, PreloadHyperspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starships of Star Wars';
}
