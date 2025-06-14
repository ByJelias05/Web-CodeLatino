import { Routes } from '@angular/router';

// Importamos todos los componentes que se usarán en las rutas
import { Prueba } from './prueba/prueba';
import { App } from './app';
import { CrearCuenta } from './crear-cuenta/crear-cuenta';
import { Chat } from './chat/chat';
import { TecnologiasFavoritas } from './tecnologias-favoritas/tecnologias-favoritas';
import { DatosPersonales } from './datos-personales/datos-personales';
import { NivelExperiencia } from './nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from './informacion-adicional/informacion-adicional';

export const routes: Routes = [

  // 👉 Si la URL está vacía (ej: https://web-codelatino.onrender.com), redirige automáticamente a /crear/datos-personales
  { path: '', redirectTo: 'crear/datos-personales', pathMatch: 'full' },

  // 👉 Si el usuario pone solo /crear, también redirige a /crear/datos-personales
  { path: 'crear', redirectTo: 'crear/datos-personales', pathMatch: 'full' },

  // 👉 Esta ruta usa un componente principal (CrearCuenta) y define rutas hijas
  {
    path: 'crear',
    component: CrearCuenta,
    children: [
      // 👉 Estas son rutas hijas dentro de /crear
      { path: 'datos-personales', component: DatosPersonales },
      { path: 'tecnologias', component: TecnologiasFavoritas },
      { path: 'roles', component: NivelExperiencia },
      { path: 'informacion-adicional', component: InformacionAdicional },
    ]
  },

  // 👉 Ruta directa que carga CrearCuenta (no tiene rutas hijas)
  { path: 'prueba', component: CrearCuenta },

  // 👉 Ruta directa al componente de chat
  { path: 'chat', component: Chat },

  // 👇 (Opcional) Puedes agregar un **wildcard route** para manejar rutas no encontradas
  // { path: '**', redirectTo: 'crear/datos-personales' }

];
