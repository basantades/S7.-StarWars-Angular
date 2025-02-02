import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  httpClient = inject(HttpClient); //hay que añadir provideHttpClient(), en app.config
    listStarships = signal<any[]>([]);
  

  getStarshipsList(): Observable<any> {
    return this.httpClient.get<any>(`https://swapi.dev/api/starships/`);
  }
  

  getIdFromUrl(url: string): string | null {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  }

}
