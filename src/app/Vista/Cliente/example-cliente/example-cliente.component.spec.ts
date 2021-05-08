import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleClienteComponent } from './example-cliente.component';

describe('ExampleClienteComponent', () => {
  let component: ExampleClienteComponent;
  let fixture: ComponentFixture<ExampleClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
