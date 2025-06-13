import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearCuenta } from "./crear-cuenta/crear-cuenta";
import { Cabeza } from "./cabeza/cabeza";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrearCuenta, Cabeza],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'App';
}
