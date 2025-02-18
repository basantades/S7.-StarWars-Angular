import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // 🆕 Agregar provideHttpClient
import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotsComponent],  // Asegúrate de que el componente esté en imports si es standalone
      providers: [
        provideHttpClient(),  // 🆕 Agregar provideHttpClient para HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
