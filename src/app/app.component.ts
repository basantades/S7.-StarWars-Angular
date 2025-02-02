import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { ListStarshipsComponent } from './components/list-starships/list-starships.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreloadHyperspaceComponent, ListStarshipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'S7.-StarWars-Angular';
}
