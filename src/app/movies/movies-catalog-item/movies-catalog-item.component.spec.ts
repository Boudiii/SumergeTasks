import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCatalogItemComponent } from './movies-catalog-item.component';

describe('MoviesCatalogItemComponent', () => {
  let component: MoviesCatalogItemComponent;
  let fixture: ComponentFixture<MoviesCatalogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ MoviesCatalogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(MoviesCatalogItemComponent);
    let app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy();
  });
});
