import { Injectable, inject, signal } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  httpClient = inject(HttpClient); // Hay que añadir provideHttpClient() en app.config
  
  listStarships = signal<any[]>([]); 
  
  private primaryApiUrl = 'https://swapi.dev/api/starships/';
  private fallbackApiUrl = 'https://swapi.py4e.com/api/starships/';

  nextPageUrl: string | null = '';

  getStarshipsList(): void {
    // Evitamos hacer la petición si ya tenemos datos almacenados
    if (this.listStarships().length > 0) return;

    this.httpClient.get<any>(this.primaryApiUrl).pipe(
      catchError(() => {
        console.warn('⚠️ Error con la API principal, intentando con la API de respaldo...');
        return this.httpClient.get<any>(this.fallbackApiUrl); // Segunda API si falla la primera
      })
    ).subscribe((data) => {
      console.log("Datos recibidos:", data);
      this.listStarships.set(data.results);
      this.nextPageUrl = data.next;
    });
  }

  getNextPageStarshipsList(): void {
    if (!this.nextPageUrl) return; // Si no hay más páginas, no hacer nada

    this.httpClient.get<any>(this.nextPageUrl).subscribe((data) => {
      console.log("Resultados recibidos siguiente pagina:", data.results);
      this.listStarships.update(currentList => [...currentList, ...data.results]); // Agrega los nuevos resultados
      this.nextPageUrl = data.next; // Actualiza la URL de la siguiente página
    });
  }

  getIdFromUrl(url: string): string | null {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  }
}