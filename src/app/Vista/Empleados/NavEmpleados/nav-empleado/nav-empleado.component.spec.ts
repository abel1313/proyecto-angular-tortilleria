import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpleadoComponent } from './nav-empleado.component';

describe('NavEmpleadoComponent', () => {
  let component: NavEmpleadoComponent;
  let fixture: ComponentFixture<NavEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
