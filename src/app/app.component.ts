import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PreloadHyperspaceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starships of Star Wars';
}
