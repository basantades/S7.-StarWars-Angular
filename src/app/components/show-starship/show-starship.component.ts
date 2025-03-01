import { Component, inject, effect } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from "../title/title.component";
import { PilotsComponent } from "./pilots/pilots.component";
import { FilmsComponent } from "./films/films.component";

@Component({
  selector: 'app-show-starship',
  imports: [TitleComponent, PilotsComponent, FilmsComponent],
  templateUrl: './show-starship.component.html',
  styleUrl: './show-starship.component.scss'
})
export class ShowStarshipComponent {
  starshipsService = inject(StarshipsService);
  selectedStarship = this.starshipsService.selectedStarship;
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.starshipsService.showStarship(Number(id));
      }
    });

    effect(() => {
      if (!this.selectedStarship()) {
        console.warn("⚠️ No hay datos disponibles para esta nave.");
      }
    });
  }
}
