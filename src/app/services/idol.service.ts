import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdolService {

  //Atributos

  //constructor
  constructor() { }


  // Métodos
public getIdols(): Idol[]{
  const listadoIdols: Idol[] = [{
      nombre: "Sasshi",
      imagen: "",
      honor: 98,
      ataque: 45,
      defensa: 93,
      poder: 350,
      vida: 0
    },
    {
      nombre: "Acchan",
      imagen: "",
      honor: 92,
      ataque: 83,
      defensa: 63,
      poder: 550,
      vida: 80
    },
    {
      nombre: "Harugon",
      imagen: "",
      honor: 60,
      ataque: 75,
      defensa: 73,
      poder: 450,
      vida: 0
    },
    {
      nombre: "Kojiharu",
      imagen: "",
      honor: 80,
      ataque: 120,
      defensa: 50,
      poder: 550,
      vida: 60
    }
    // this.listadoIdols = []; //dejar lista vacía
    ];
    return listadoIdols;
}

public getSasshi(){

}

}
