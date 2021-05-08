import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoBodyComponent } from './contacto-body.component';

describe('ContactoBodyComponent', () => {
  let component: ContactoBodyComponent;
  let fixture: ComponentFixture<ContactoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
