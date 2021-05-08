import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionSistemaComponent } from './navegacion-sistema.component';

describe('NavegacionSistemaComponent', () => {
  let component: NavegacionSistemaComponent;
  let fixture: ComponentFixture<NavegacionSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
