import { Routes } from '@angular/router';
import { Prueba } from './prueba/prueba';
import { App } from './app';
import { CrearCuenta } from './crear-cuenta/crear-cuenta';
import { Chat } from './chat/chat';
import { TecnologiasFavoritas } from './tecnologias-favoritas/tecnologias-favoritas';
import { DatosPersonales } from './datos-personales/datos-personales';
import { NivelExperiencia } from './nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from './informacion-adicional/informacion-adicional';

export const routes: Routes = [
  { path: '', redirectTo: 'crear/datos-personales', pathMatch: 'full' },

  {
    path: 'crear',
    component: CrearCuenta,
    children: [
      { path: 'datos-personales', component: DatosPersonales },
      { path: 'tecnologias', component: TecnologiasFavoritas },
      { path: 'roles', component: NivelExperiencia },
      { path: 'informacion-adicional', component: InformacionAdicional }
    ]
  },

  { path: 'prueba', component: CrearCuenta },
  { path: 'chat', component: Chat }
];
