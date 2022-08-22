import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCatalogItemComponent } from './movies-catalog-item.component';

describe('MoviesCatalogItemComponent', () => {
  let component: MoviesCatalogItemComponent;
  let fixture: ComponentFixture<MoviesCatalogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCatalogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
