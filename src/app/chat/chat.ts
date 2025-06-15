import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  public Chat: string[] = []

  public Mensaje = new FormControl("")

  public EnviarMensaje(){
    this.Chat.push(this.Mensaje.value ?? "");
    
   
  }
}
  