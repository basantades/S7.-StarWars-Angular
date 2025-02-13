import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloadHyperspaceComponent } from './components/preload-hyperspace/preload-hyperspace.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './components/users/login/login.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PreloadHyperspaceComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starships of Star Wars';

}
