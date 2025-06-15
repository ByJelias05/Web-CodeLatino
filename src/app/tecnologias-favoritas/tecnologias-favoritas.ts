import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias-favoritas',
  imports: [],
  templateUrl: './tecnologias-favoritas.html',
  styleUrl: './tecnologias-favoritas.css'
})
export class TecnologiasFavoritas {

  public ListaTecnologias: Array<string> = []

  public AgregarTecnologia(tecnologia:string){
    
    if(!this.ListaTecnologias.includes(tecnologia)){
      this.ListaTecnologias.push(tecnologia)
    }
    else{
      let index = this.ListaTecnologias.findIndex(tecno => tecno == tecnologia)
      this.ListaTecnologias.splice(index, 1)
    }

  }
}
