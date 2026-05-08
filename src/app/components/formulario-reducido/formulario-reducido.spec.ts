import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReducido } from './formulario-reducido';

describe('FormularioReducido', () => {
  let component: FormularioReducido;
  let fixture: ComponentFixture<FormularioReducido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReducido],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioReducido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
