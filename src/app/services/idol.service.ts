import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdolService {

  //Atributos

  //constructor
  constructor() { }


  // Métodos
  public getIdols(): Idol[] {
    const listadoIdols: Idol[] = [{
      nombre: "Sasshi",
      imagen: "img/sasshi1.png",
      honor: 98,
      ataque: 45,
      defensa: 93,
      poder: 350,
      vida: 25
    },
    {
      nombre: "Acchan",
      imagen: "img/acchan1.png",
      honor: 92,
      ataque: 83,
      defensa: 63,
      poder: 550,
      vida: 26
    },
    {
      nombre: "Mayuyu",
      imagen: "img/mayu1.png",
      honor: 60,
      ataque: 75,
      defensa: 73,
      poder: 450,
      vida: 52
    },
    {
      nombre: "Kojiharu",
      imagen: "img/kojiharu1.png",
      honor: 80,
      ataque: 100,
      defensa: 50,
      poder: 550,
      vida: 100
    },
    {
      nombre: "Erii",
      imagen: "img/erii1.png",
      honor: 60,
      ataque: 75,
      defensa: 93,
      poder: 280,
      vida: 52
    },
    {
      nombre: "Tomo",
      imagen: "img/tomomi1.png",
      honor: 80,
      ataque: 85,
      defensa: 63,
      poder: 550,
      vida: 72
    },
      // this.listadoIdols = []; //dejar lista vacía
    ];
    return listadoIdols;
  }


}
