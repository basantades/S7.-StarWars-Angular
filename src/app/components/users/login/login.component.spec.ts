import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Auth } from '@angular/fire/auth'; // Si también usas Auth, lo mockeamos igualmente

// Mock para ActivatedRoute
class MockActivatedRoute {
  snapshot = { queryParams: {} }; // Ajusta esto según lo que uses en tu componente
}

class MockAuth {
  onAuthStateChanged = jasmine.createSpy('onAuthStateChanged').and.returnValue(of(null)); // Simulamos el método onAuthStateChanged
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuth: MockAuth;

  beforeEach(async () => {
    mockAuth = new MockAuth();

    await TestBed.configureTestingModule({
      imports: [LoginComponent], // IMPORTAMOS el componente
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }, // Proveemos el mock de ActivatedRoute
        { provide: Auth, useValue: mockAuth } // Proveemos el mock de Auth si es necesario
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
