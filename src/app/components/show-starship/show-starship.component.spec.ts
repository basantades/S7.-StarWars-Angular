import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStarshipComponent } from './show-starship.component';

describe('ShowStarshipComponent', () => {
  let component: ShowStarshipComponent;
  let fixture: ComponentFixture<ShowStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStarshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
