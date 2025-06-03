import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  imports: [],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo {

  //Atributos
  public listadoIdols: Array<any>;

  //Constructores
  constructor() {
    this.listadoIdols = [{
      nombre: "Sasshi",
      imagen: "",
      ataque: 45,
      defensa: 93,
      poder: 350,
      vida: 0
    },
    {
      nombre: "Acchan",
      imagen: "",
      ataque: 83,
      defensa: 63,
      poder: 550,
      vida: 80
    },
    {
      nombre: "Harugon",
      imagen: "",
      ataque: 75,
      defensa: 73,
      poder: 450,
      vida: 0
    },
    {
      nombre: "Kojiharu",
      imagen: "",
      ataque: 120,
      defensa: 50,
      poder: 550,
      vida: 60
    }
    ];
    // this.listadoIdols = []; //dejar lista vacía
  }


  //Métodos
}
