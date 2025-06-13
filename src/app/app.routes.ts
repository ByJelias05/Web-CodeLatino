import { Routes } from '@angular/router';
import { Prueba } from './prueba/prueba';
import { App } from './app';
import { CrearCuenta } from './crear-cuenta/crear-cuenta';

export const routes: Routes = [
    {path: '', component: CrearCuenta},
    {path: 'prueba', component: CrearCuenta}
];
