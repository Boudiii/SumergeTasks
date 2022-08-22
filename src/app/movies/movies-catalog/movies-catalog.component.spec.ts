import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { MoviesCatalogComponent } from './movies-catalog.component';

describe('MoviesCatalogComponent', () => {
  let component: MoviesCatalogComponent;
  let fixture: ComponentFixture<MoviesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxPaginationModule
      ],
      declarations: [ MoviesCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(MoviesCatalogComponent);
    let app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy();
  });
});
