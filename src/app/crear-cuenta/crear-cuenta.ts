import { Component, inject, OnInit } from '@angular/core';
import { Cabeza } from '../cabeza/cabeza';
import { DatosPersonales } from '../datos-personales/datos-personales';
import { TecnologiasFavoritas } from '../tecnologias-favoritas/tecnologias-favoritas';
import { NivelExperiencia } from '../nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from '../informacion-adicional/informacion-adicional';
import { DatosUsuario } from '../datos-usuario/datos-usuario';
import { ActivatedRoute, RouterOutlet, RouterLinkActive, RouterState ,Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  imports: [Cabeza, DatosPersonales, RouterOutlet],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css'
})
export class CrearCuenta  {


}
