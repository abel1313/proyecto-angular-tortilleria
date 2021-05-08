import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFooterComponent } from './contacto-footer.component';

describe('ContactoFooterComponent', () => {
  let component: ContactoFooterComponent;
  let fixture: ComponentFixture<ContactoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
