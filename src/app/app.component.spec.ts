import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Router, NavigationEnd, provideRouter } from '@angular/router';

// Mock para Auth
class MockAuth {
  onAuthStateChanged = jasmine.createSpy('onAuthStateChanged').and.returnValue(() => {});
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Usamos AppComponent directamente
      providers: [
        { provide: Auth, useClass: MockAuth },
        provideRouter([]), // Usamos provideRouter para la configuración de rutas
        {
          provide: ActivatedRoute,
          useValue: { paramMap: () => {} }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'Starships of Star Wars' title`, () => {
    expect(component.title).toEqual('Starships of Star Wars');
  });

  it('should change showTransition on navigation', (done) => {
    const spy = spyOn(component.showTransition, 'set'); // Espiar la señal

    // Disparar un evento de navegación de forma simulada
    router.navigate(['/']).then(() => {
      expect(spy).toHaveBeenCalledWith(false); // Verificar que showTransition se establezca en false
      done();
    });
  });

  it('should reset showTransition after 50ms', (done) => {
    const spy = spyOn(component.showTransition, 'set'); // Espiar la señal

    // Disparar un evento de navegación de forma simulada
    router.navigate(['/']).then(() => {
      // Verificar que showTransition vuelva a true después de 50ms
      setTimeout(() => {
        expect(spy).toHaveBeenCalledWith(true);
        done();
      }, 100); // Aseguramos que el tiempo es suficiente
    });
  });
});
