import { Component, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-list-starships',
  imports: [  ],
  templateUrl: './list-starships.component.html',
  styleUrl: './list-starships.component.scss'
})
export class ListStarshipsComponent {

  starshipsService = inject(StarshipsService);
  listStarships: any[] = [];  

  constructor() {
    this.getStarshipsList();
  }

  getStarshipsList() {
    this.starshipsService.getStarshipsList().subscribe((data: any) => {
      console.log("Datos recibidos:", data);
      this.listStarships = data.results;
    });
  }
}
