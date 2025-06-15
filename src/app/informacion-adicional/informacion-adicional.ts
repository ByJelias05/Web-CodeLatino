import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgControl, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-informacion-adicional',
  imports: [ReactiveFormsModule, CommonModule, FormsModule,],
  templateUrl: './informacion-adicional.html',
  styleUrl: './informacion-adicional.css'
})
export class InformacionAdicional {

  public Region = new FormControl("")
  public Link = new FormControl("")

  public image= ""

  public ExtaerImagen(event:Event){
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      this.image = window.URL.createObjectURL(input.files[0])
    }
  }
   
}
 