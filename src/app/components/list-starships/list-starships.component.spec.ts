import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStarshipsComponent } from './list-starships.component';
import { StarshipsService } from '../../services/starships.service';
import { TitleComponent } from '../title/title.component';

describe('ListStarshipsComponent', () => {
  let component: ListStarshipsComponent;
  let fixture: ComponentFixture<ListStarshipsComponent>;
  let starshipsService: jasmine.SpyObj<StarshipsService>;

  beforeEach(async () => {
    // Creamos un mock manualmente para StarshipsService
    starshipsService = jasmine.createSpyObj('StarshipsService', [
      'getStarshipsList',
      'getNextPageStarshipsList'
    ]);

    // Simulamos que listStarships es una señal que retorna un array vacío
    Object.defineProperty(starshipsService, 'listStarships', {
      get: () => jasmine.createSpy('listStarships').and.returnValue([])
    });

    await TestBed.configureTestingModule({
      imports: [ListStarshipsComponent, TitleComponent],
      providers: [{ provide: StarshipsService, useValue: starshipsService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStarshipsList() on ngOnInit()', () => {
    expect(starshipsService.getStarshipsList).toHaveBeenCalled();
  });

  it('should call getNextPageStarshipsList() when scrolling near the bottom', () => {
    spyOnProperty(document.documentElement, 'scrollTop').and.returnValue(1000);
    spyOnProperty(document.documentElement, 'scrollHeight').and.returnValue(1500);
    spyOnProperty(document.documentElement, 'clientHeight').and.returnValue(500);

    component.onScroll();

    expect(starshipsService.getNextPageStarshipsList).toHaveBeenCalled();
  });

  it('should NOT call getNextPageStarshipsList() if not near the bottom', () => {
    spyOnProperty(document.documentElement, 'scrollTop').and.returnValue(500);
    spyOnProperty(document.documentElement, 'scrollHeight').and.returnValue(2000);
    spyOnProperty(document.documentElement, 'clientHeight').and.returnValue(500);

    component.onScroll();

    expect(starshipsService.getNextPageStarshipsList).not.toHaveBeenCalled();
  });
});
