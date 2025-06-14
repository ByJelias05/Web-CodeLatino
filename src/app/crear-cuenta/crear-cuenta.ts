import { Component, inject, OnInit } from '@angular/core';
import { Cabeza } from '../cabeza/cabeza';
import { DatosPersonales } from '../datos-personales/datos-personales';
import { TecnologiasFavoritas } from '../tecnologias-favoritas/tecnologias-favoritas';
import { NivelExperiencia } from '../nivel-experiencia/nivel-experiencia';
import { InformacionAdicional } from '../informacion-adicional/informacion-adicional';
import { DatosUsuario } from '../datos-usuario/datos-usuario';
import { ActivatedRoute, RouterOutlet, RouterLinkActive, RouterState ,Router, RouterLink, } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  imports: [Cabeza, DatosPersonales, RouterOutlet, RouterLink],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css'
})
export class CrearCuenta  implements OnInit{

  public router = inject(Router)
  
  public url:string = "";

  ngOnInit(): void {
      this.url = this.router.url
  }

  public Next(){
     if(this.url.includes("datos-personales")){
        window.location.href = "crear/tecnologias"
      }
      else if(this.url.includes("tecnologias")){
        window.location.href = "crear/roles"
      }
      else if(this.url.includes("roles")){
        window.location.href = "crear/informacion-adicional"
      }
  }

}
