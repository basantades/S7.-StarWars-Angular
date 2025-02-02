import { Component } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-list-starships',
  imports: [],
  templateUrl: './list-starships.component.html',
  styleUrl: './list-starships.component.scss'
})
export class ListStarshipsComponent {

  constructor(private starshipsService: StarshipsService) {

    starshipsService.getStarshipsList().subscribe((data) => {
      console.log(data);
    })
  }

}
