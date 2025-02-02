import { Component, inject, effect } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-list-starships',
  templateUrl: './list-starships.component.html',
  styleUrl: './list-starships.component.scss'
})
export class ListStarshipsComponent {

  starshipsService = inject(StarshipsService);
  listStarships = this.starshipsService.listStarships; 

  constructor() {
    this.starshipsService.getStarshipsList(); 
  }
}
