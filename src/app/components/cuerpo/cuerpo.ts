import { Component, OnInit } from '@angular/core';
import { IdolService } from '../../services/idol.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cuerpo',
  imports: [CommonModule],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo implements OnInit {

  //Atributos
  public listadoIdols: Idol[];
  //public idolService: IdolService;

  //Constructores
  // constructor(idolService: IdolService) {
  //   this.idolService = idolService;
  //   this.listadoIdols = this.idolService.getIdols();
  // }

  constructor(public idolService: IdolService){
    this.listadoIdols = this.idolService.getIdols();
  }

ngOnInit(): void {
  
}
  //Métodos
}
