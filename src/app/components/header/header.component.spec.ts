import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Auth } from '@angular/fire/auth'; // Importamos el servicio de autenticación
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Mock para el servicio de autenticación
class MockAuth {
  onAuthStateChanged = jasmine.createSpy('onAuthStateChanged').and.returnValue(of(null)); // Mockeamos el método onAuthStateChanged
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuth: MockAuth;

  beforeEach(async () => {
    mockAuth = new MockAuth();

    await TestBed.configureTestingModule({
      imports: [HeaderComponent], // IMPORTAMOS el componente, no lo declaramos
      providers: [
        { provide: Auth, useValue: mockAuth }, // Usamos el mock del servicio de autenticación
        provideRouter([]), // Se agrega un router vacío para evitar errores
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onAuthStateChanged', () => {
    expect(mockAuth.onAuthStateChanged).toHaveBeenCalled();
  });
});
