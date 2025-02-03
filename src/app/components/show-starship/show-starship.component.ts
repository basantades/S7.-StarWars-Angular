import { Component, effect, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-starship',
  imports: [],
  templateUrl: './show-starship.component.html',
  styleUrl: './show-starship.component.scss'
})
export class ShowStarshipComponent {
  starshipsService = inject(StarshipsService);
  selectedStarship = this.starshipsService.selectedStarship;
  route = inject(ActivatedRoute);


  constructor() {
    const id = this.route.snapshot.params['id'];
    this.starshipsService.showStarship(id);
  }

}
