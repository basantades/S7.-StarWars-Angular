import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  httpClient = inject(HttpClient); // Hay que añadir provideHttpClient() en app.config
  
  listStarships = signal<any[]>([]); 

  getStarshipsList(): void {
    // Evitamos hacer la petición si ya tenemos datos almacenados
    if (this.listStarships().length > 0) return;

    this.httpClient.get<any>('https://swapi.dev/api/starships/')
      .subscribe((data) => {
        console.log("Datos recibidos:", data);
        this.listStarships.set(data.results); 
      });
  }

  getIdFromUrl(url: string): string | null {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  }
}