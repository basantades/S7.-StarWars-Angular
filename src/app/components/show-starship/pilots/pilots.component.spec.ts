import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // 🆕 Agregar provideHttpClient
import { PilotsComponent } from './pilots.component'; // Tu componente
import { StarshipsService } from '../../../services/starships.service'; // Asegúrate de que esto esté en el módulo de pruebas
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { HttpClient } from '@angular/common/http'; // Importar HttpClient

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let httpMock: HttpClient;
  let starshipsServiceMock: jasmine.SpyObj<StarshipsService>;

  beforeEach(async () => {
    // Mock del servicio StarshipsService
    starshipsServiceMock = jasmine.createSpyObj('StarshipsService', ['getStarshipDetails']); // Cambia según tu servicio

    // Mock de ActivatedRoute
    const activatedRouteMock = {
      snapshot: {
        paramMap: new Map([['id', '1']]), // Simula los parámetros de la ruta
      },
    };

    await TestBed.configureTestingModule({
      imports: [PilotsComponent],  // Asegúrate de que el componente esté en imports si es standalone
      providers: [
        provideHttpClient(),  // Usamos provideHttpClient para las pruebas HTTP
        { provide: StarshipsService, useValue: starshipsServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Proveer el mock de ActivatedRoute
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpClient); // Inyectamos HttpClient
    fixture.detectChanges(); // Detectamos cambios iniciales
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render pilot data correctly', () => {
    // Simulamos los datos del piloto
    const pilotData = {
      name: 'Luke Skywalker',
      starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
      url: 'https://swapi.dev/api/people/1/'
    };

    component.pilot = pilotData;
    fixture.detectChanges(); // Detectamos cambios para renderizar

    // Verificamos que el nombre del piloto se muestra
    const pilotNameElement = fixture.nativeElement.querySelector('h3');
    expect(pilotNameElement.textContent).toContain(pilotData.name);

    // Verificamos que la imagen del piloto se carga correctamente
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(pilotData.url.split('/')[5]);

    // Verificamos que los starships se muestran correctamente
    const starshipsElements = fixture.nativeElement.querySelectorAll('a');
    expect(starshipsElements.length).toBe(pilotData.starships.length);
  });

  it('should display error message if pilot data cannot be loaded', () => {
    // Simulamos el caso en que ocurre un error al cargar los datos del piloto
    component.errorMessage = 'Error loading pilot data';
    fixture.detectChanges(); // Detectamos cambios para renderizar
  
    // Verificamos que el mensaje de error se muestra
    const errorElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorElement).toBeTruthy(); // Ahora debería encontrarse el elemento
    expect(errorElement.textContent).toContain('Error loading pilot data');
  });

  it('should show "No starships available" when pilot has no starships', () => {
    // Simulamos un piloto sin naves
    const pilotData = {
      name: 'Anakin Skywalker',
      starships: [],
      url: 'https://swapi.dev/api/people/2/'
    };

    component.pilot = pilotData;
    fixture.detectChanges(); // Detectamos cambios para renderizar

    // Verificamos que el mensaje "No starships available" se muestra
    const noStarshipsElement = fixture.nativeElement.querySelector('span');
    expect(noStarshipsElement).toBeTruthy();
    expect(noStarshipsElement.textContent).toContain('No starships available');
  });

  it('should render a placeholder if no pilot data is available', () => {
    // Simulamos el caso en que no hay datos del piloto
    component.pilot = undefined;
    fixture.detectChanges(); // Detectamos cambios para renderizar

    // Verificamos que no se muestre ningún dato de piloto
    const pilotNameElement = fixture.nativeElement.querySelector('h3');
    expect(pilotNameElement).toBeNull(); // No debería haber ningún nombre

    const starshipsSection = fixture.nativeElement.querySelector('.flex');
    expect(starshipsSection).toBeNull(); // No debería haber ninguna nave
  });
});
