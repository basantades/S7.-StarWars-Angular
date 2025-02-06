import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PreloadHyperspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starships of Star Wars';
}
