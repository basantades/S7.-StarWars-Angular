import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { Auth } from '@angular/fire/auth'; // Si el componente depende de Auth, lo mockeamos

// Mock para Auth
class MockAuth {
  createUserWithEmailAndPassword = jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.resolve({}));
  // Si utilizas otros métodos de Auth, los puedes simular aquí
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuth: MockAuth;

  beforeEach(async () => {
    mockAuth = new MockAuth();

    await TestBed.configureTestingModule({
      imports: [RegisterComponent], // IMPORTAMOS el componente
      providers: [
        { provide: Auth, useValue: mockAuth }, // Proveemos el mock de Auth
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
