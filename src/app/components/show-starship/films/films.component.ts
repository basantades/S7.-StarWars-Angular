import { Component, inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-films',
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})


export class FilmsComponent implements OnInit {
  @Input() filmUrl: string | undefined;  // Recibimos la URL del film como input
  film: any;  
  errorMessage: string | undefined;  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.filmUrl) {
      // Hacemos la solicitud HTTP para obtener los detalles del film
      this.http.get(this.filmUrl).pipe(
        catchError(error => {
          this.errorMessage = 'Error loading film data';
          return of(null);  // En caso de error, devolvemos null
        })
      ).subscribe(data => {
        if (data) {
          this.film = data;
        }
      });
    }
  }
}
