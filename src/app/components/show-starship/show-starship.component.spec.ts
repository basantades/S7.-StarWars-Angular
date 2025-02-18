import { TestBed } from '@angular/core/testing';
import { ShowStarshipComponent } from './show-starship.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';  // ✅ Importar ActivatedRoute
import { StarshipsService } from '../../services/starships.service';
import { of } from 'rxjs'; // ✅ Para simular valores

describe('ShowStarshipComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStarshipComponent],  // ✅ Standalone components van en imports
      providers: [
        StarshipsService,
        provideHttpClient(),
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { queryParams: { id: '1' } } } // 🛠 Mock de ActivatedRoute
        }
      ] 
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShowStarshipComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
