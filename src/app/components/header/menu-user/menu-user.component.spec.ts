import { TestBed } from '@angular/core/testing';
import { MenuUserComponent } from './menu-user.component';
import { Auth } from '@angular/fire/auth'; // ✅ Importamos Auth
import { of } from 'rxjs';

describe('MenuUserComponent', () => {
  let mockAuth: jasmine.SpyObj<Auth>;

  beforeEach(async () => {
    mockAuth = jasmine.createSpyObj('Auth', [], {
      currentUser: of(null) // ✅ Simula que no hay usuario autenticado
    });

    await TestBed.configureTestingModule({
      declarations: [MenuUserComponent],
      providers: [
        { provide: Auth, useValue: mockAuth } // ✅ Proporcionamos el mock
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MenuUserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
