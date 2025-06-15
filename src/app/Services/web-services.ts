import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServices {

  constructor() { }

  public progreso: number = 0;

  public UploadProgress(Seccion:string) : number{

    return 0
  }
}
