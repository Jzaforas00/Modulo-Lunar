import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExtendido } from './formulario-extendido';

describe('FormularioExtendido', () => {
  let component: FormularioExtendido;
  let fixture: ComponentFixture<FormularioExtendido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioExtendido],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioExtendido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
