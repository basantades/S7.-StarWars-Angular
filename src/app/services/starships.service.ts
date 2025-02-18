import { Injectable, inject, signal } from '@angular/core';
import { catchError, finalize } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  httpClient = inject(HttpClient);

  listStarships = signal<any[]>([]); 

  private primaryApiUrl = 'https://swapi.dev/api/starships/';
  private fallbackApiUrl = 'https://swapi.py4e.com/api/starships/';

  nextPageUrl: string | null = '';
  selectedStarship = signal<any | null>(null);

  getStarshipsList(): void {
    if (this.listStarships().length > 0) return;

    this.httpClient.get<any>(this.primaryApiUrl).pipe(
      catchError(error => {
        console.warn('⚠️ Error con la API principal, intentando con la API de respaldo...', error);
        return this.httpClient.get<any>(this.fallbackApiUrl);
      })
    ).subscribe({
      next: (data) => {
        this.listStarships.set(data.results);
        this.nextPageUrl = data.next;
      },
      error: (error) => {
        console.error('❌ Ambas APIs fallaron al obtener starships:', error);
      }
    });
  }

  isLoading = signal(false);

  
  getNextPageStarshipsList(): void {
    if (!this.nextPageUrl || this.isLoading()) return;
  
    this.isLoading.set(true);
  
    this.httpClient.get<any>(this.nextPageUrl).pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (data) => {
        this.listStarships.update(currentList => [...currentList, ...data.results]);
        this.nextPageUrl = data.next;
      },
      error: () => {
        console.error('⚠️ Error al obtener la siguiente página.');
      }
    });
  }

  showStarship(id: number): void {
    console.log("iniciando showStarship():", id);
    this.httpClient.get<any>(`https://swapi.dev/api/starships/${id}`).pipe(
      catchError(() => {
        console.warn('⚠️ Error con la API principal, intentando con la API de respaldo...');
        return this.httpClient.get<any>(`https://swapi.py4e.com/api/starships/${id}`);
      })
    ).subscribe((data) => {
      this.selectedStarship.set(data);
    });
    console.log("final showStarship():", this.selectedStarship());
  }

}
