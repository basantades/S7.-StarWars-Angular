import { Component, inject, HostListener } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Title } from '@angular/platform-browser';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-list-starships',
  templateUrl: './list-starships.component.html',
  styleUrl: './list-starships.component.scss',
  imports: [TitleComponent]
})
export class ListStarshipsComponent {

  starshipsService = inject(StarshipsService);
  listStarships = this.starshipsService.listStarships; 

  constructor() {
    this.starshipsService.getStarshipsList(); 
  }

    // Detecta el scroll de la ventana
    @HostListener("window:scroll", [])
    onScroll(): void {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        // Si el usuario está a 200px del final, carga más datos
        this.starshipsService.getNextPageStarshipsList();
      }
    }
    
}
