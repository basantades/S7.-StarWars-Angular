import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { StarshipsService } from './starships.service';
import { provideHttpClient } from '@angular/common/http';

describe('StarshipsService', () => {
  let service: StarshipsService;
  let httpMock: HttpTestingController;

  const mockStarshipsResponse = {
    results: [
      { name: 'Starship 1', model: 'Model 1' },
      { name: 'Starship 2', model: 'Model 2' }
    ],
    next: 'https://swapi.dev/api/starships/?page=2'
  };

  const mockStarshipDetail = { name: 'Starship 1', model: 'Model 1' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarshipsService, provideHttpClient(), provideHttpClientTesting()]
    });

    service = TestBed.inject(StarshipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch starships list', () => {
    service.getStarshipsList();

    const req = httpMock.expectOne('https://swapi.dev/api/starships/');
    expect(req.request.method).toBe('GET');
    req.flush(mockStarshipsResponse);

    expect(service.listStarships()).toEqual(mockStarshipsResponse.results);
    expect(service.nextPageUrl).toBe(mockStarshipsResponse.next);
  });

  it('should use fallback API if primary API fails', () => {
    service.getStarshipsList();

    const req = httpMock.expectOne('https://swapi.dev/api/starships/');
    req.error(new ErrorEvent('Network error'));

    const reqFallback = httpMock.expectOne('https://swapi.py4e.com/api/starships/');
    expect(reqFallback.request.method).toBe('GET');
    reqFallback.flush(mockStarshipsResponse);

    expect(service.listStarships()).toEqual(mockStarshipsResponse.results);
    expect(service.nextPageUrl).toBe(mockStarshipsResponse.next);
  });

  it('should fetch next page of starships', () => {
    // Simula que ya hay una primera página cargada
    service.listStarships.set([...mockStarshipsResponse.results]);
  
    service.nextPageUrl = 'https://swapi.dev/api/starships/?page=2';
    service.getNextPageStarshipsList();
  
    const req = httpMock.expectOne('https://swapi.dev/api/starships/?page=2');
    expect(req.request.method).toBe('GET');
    req.flush(mockStarshipsResponse);
  
    expect(service.listStarships()).toEqual([
      ...mockStarshipsResponse.results, // Starships que ya estaban cargadas
      ...mockStarshipsResponse.results  // Nueva página añadida
    ]);
  });

  it('should fetch a starship by id', () => {
    service.showStarship(1);

    const req = httpMock.expectOne('https://swapi.dev/api/starships/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockStarshipDetail);

    expect(service.selectedStarship()).toEqual(mockStarshipDetail);
  });

  it('should use fallback API if fetching a starship by id fails', () => {
    service.showStarship(1);

    const req = httpMock.expectOne('https://swapi.dev/api/starships/1');
    req.error(new ErrorEvent('Network error'));

    const reqFallback = httpMock.expectOne('https://swapi.py4e.com/api/starships/1');
    expect(reqFallback.request.method).toBe('GET');
    reqFallback.flush(mockStarshipDetail);

    expect(service.selectedStarship()).toEqual(mockStarshipDetail);
  });

});
