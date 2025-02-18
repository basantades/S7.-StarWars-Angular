import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Auth } from '@angular/fire/auth'; // Importamos Auth

// Mock para Auth
class MockAuth {
  onAuthStateChanged = jasmine.createSpy('onAuthStateChanged').and.returnValue(() => {});
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: Auth, useClass: MockAuth },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Starships of Star Wars' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Starships of Star Wars'); 
  });
});
