import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuUserComponent } from './menu-user.component';
import { Auth } from '@angular/fire/auth'; // ✅ Importamos Auth
import { of } from 'rxjs';

// Mock para el servicio de autenticación
class MockAuth {
  onAuthStateChanged = jasmine.createSpy('onAuthStateChanged').and.returnValue(of(null)); // Mockeamos el método onAuthStateChanged
}

describe('MenuUserComponent', () => {
  let component: MenuUserComponent;
  let fixture: ComponentFixture<MenuUserComponent>;
  let mockAuth: MockAuth;

  beforeEach(async () => {
    mockAuth = new MockAuth();

    await TestBed.configureTestingModule({
      imports: [MenuUserComponent], // IMPORTAMOS el componente, no lo declaramos
      providers: [
        { provide: Auth, useValue: mockAuth } // Usamos el mock del servicio
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuUserComponent);
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
