import { Component, inject, HostListener } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { TitleComponent } from "../title/title.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-starships',
  templateUrl: './list-starships.component.html',
  styleUrl: './list-starships.component.scss',
  imports: [TitleComponent, RouterLink]
})
export class ListStarshipsComponent {

  starshipsService = inject(StarshipsService);
  listStarships = this.starshipsService.listStarships; 

  ngOnInit() {
    this.starshipsService.getStarshipsList();
  }
  

  @HostListener("window:scroll")
  onScroll(): void {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      this.starshipsService.getNextPageStarshipsList();
    }
  }
    
}
