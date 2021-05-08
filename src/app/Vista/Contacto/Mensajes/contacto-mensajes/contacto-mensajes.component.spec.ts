import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMensajesComponent } from './contacto-mensajes.component';

describe('ContactoMensajesComponent', () => {
  let component: ContactoMensajesComponent;
  let fixture: ComponentFixture<ContactoMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoMensajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
