import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabeza } from './cabeza/cabeza';
import { DatosPersonales } from './datos-personales/datos-personales';
import { TecnologiasFavoritas } from './tecnologias-favoritas/tecnologias-favoritas';
import { NivelExperiencia } from './nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from './informacion-adicional/informacion-adicional';
import { DatosUsuario } from './datos-usuario/datos-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabeza, DatosPersonales, TecnologiasFavoritas, NivelExperiencia, InformacionAdicional, DatosUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'App';
}
