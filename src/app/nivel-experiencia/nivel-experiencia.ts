import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel-experiencia',
  imports: [],
  templateUrl: './nivel-experiencia.html',
  styleUrl: './nivel-experiencia.css'
})
export class NivelExperiencia {

  public ListaRoles: string[] = [];

  public SeleccionarRol(Rol:string){

    if(!this.ListaRoles.includes(Rol)){
      this.ListaRoles.push(Rol)
    }
    else{
      let index = this.ListaRoles.findIndex(rol => rol == Rol);
      this.ListaRoles.splice(index, 1)
    }

  }
}
 