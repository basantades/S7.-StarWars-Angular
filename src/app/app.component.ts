import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd  } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PreloadHyperspaceComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starships of Star Wars';

  showTransition = signal(true);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showTransition.set(false);  // Oculta el componente
        setTimeout(() => this.showTransition.set(true), 50); // 🔄 Reinicia el componente
      }
    });
  }
}
