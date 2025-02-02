import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadHyperspaceComponent } from './preload-hyperspace.component';

describe('PreloadHyperspaceComponent', () => {
  let component: PreloadHyperspaceComponent;
  let fixture: ComponentFixture<PreloadHyperspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreloadHyperspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloadHyperspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
