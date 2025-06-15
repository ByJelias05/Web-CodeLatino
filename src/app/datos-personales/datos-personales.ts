import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './datos-personales.html',
  styleUrl: './datos-personales.css'
})
export class DatosPersonales {
  
  public CampoSelecionado?:string
 
  public CambiarCampo(campo:string){
    this.CampoSelecionado = campo
  }


  public Formnulario = new FormGroup({
    Usuario: new FormControl("", Validators.required),
    Correo: new FormControl("", Validators.required),
    Contrasena: new FormControl("", Validators.required),
    RepetirContrasena: new FormControl("", Validators.required),
  })

}
