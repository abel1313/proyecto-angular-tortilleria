import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSistemaComponent } from './contacto-sistema.component';

describe('ContactoSistemaComponent', () => {
  let component: ContactoSistemaComponent;
  let fixture: ComponentFixture<ContactoSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
