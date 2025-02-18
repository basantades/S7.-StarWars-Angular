import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsComponent } from './films.component';
import { provideHttpClient } from '@angular/common/http';  // Usamos provideHttpClient en lugar de HttpClientModule

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsComponent], // No se necesita HttpClientModule
      providers: [provideHttpClient()]  // Se proporciona HttpClient de esta manera en Angular 19
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
