import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoSistemaComponent } from './acceso-sistema.component';

describe('AccesoSistemaComponent', () => {
  let component: AccesoSistemaComponent;
  let fixture: ComponentFixture<AccesoSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
