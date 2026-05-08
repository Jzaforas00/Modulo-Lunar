import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {

  roca = {
    id: '',
    nombre: '',
    grupo: '',
    dureza: 1,
    grano: '',
    clasificacion: '',
    cristales: 0,
    temperatura: 0,
    estructura: '',
    formaGranos: '',
    textura: ''
  };

  resultado: boolean | null = null;

  analizar() {

    const r = this.roca;

    let valido = false;

    if (r.grupo === 'Ígneas' && r.grano === 'Muy grueso') {
      valido = true;
    }

    if (
      r.grupo === 'Metamórficas' &&
      (r.grano === 'Medio' || r.grano === 'Fino') &&
      r.textura === 'Vítrea'
    ) {
      valido = true;
    }

    if (
      r.grupo === 'Sedimentarias' &&
      r.textura === 'Fanerítica'
    ) {
      valido = true;
    }

    this.resultado = valido;
  }
  
}

