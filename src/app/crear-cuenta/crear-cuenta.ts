import { Component } from '@angular/core';
import { Cabeza } from '../cabeza/cabeza';
import { DatosPersonales } from '../datos-personales/datos-personales';
import { TecnologiasFavoritas } from '../tecnologias-favoritas/tecnologias-favoritas';
import { NivelExperiencia } from '../nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from '../informacion-adicional/informacion-adicional';
import { DatosUsuario } from '../datos-usuario/datos-usuario';

@Component({
  selector: 'app-crear-cuenta',
  imports: [Cabeza, DatosPersonales, TecnologiasFavoritas, NivelExperiencia, InformacionAdicional, DatosUsuario],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css'
})
export class CrearCuenta {

}
