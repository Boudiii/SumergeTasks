import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar', waitForAsync(() => {
    let fixture = TestBed.createComponent(NavbarComponent)
    let app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy();
  }));
});
