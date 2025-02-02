import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  httpClient = inject(HttpClient);

  getStarshipsList(): Observable<any> {
    return this.httpClient.get<any>(`https://swapi.dev/api/starships/`);
  }

  getStarshipById(id_starship: string): Observable<any> {
    return this.httpClient.get<any>(`https://swapi.dev/api/starships/${id_starship}/`);
  }

}
