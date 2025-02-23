import { Component, inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StarshipsService } from '../../../services/starships.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pilots',
  imports: [RouterLink],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})


export class PilotsComponent implements OnInit {
  @Input() pilotUrl: string | undefined;  // Recibimos la URL del piloto como input
  pilot: any;  // Variable para almacenar los datos del piloto
  errorMessage: string | undefined;  // Variable para manejar errores
  starShipsService = inject(StarshipsService);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.pilotUrl) {
      // Hacemos la solicitud HTTP para obtener los detalles del piloto
      this.http.get(this.pilotUrl).pipe(
        catchError(error => {
          this.errorMessage = 'Error loading pilot data';
          return of(null);  // En caso de error, devolvemos null
        })
      ).subscribe(data => {
        if (data) {
          this.pilot = data;
        }
      });
    }
  }
}

