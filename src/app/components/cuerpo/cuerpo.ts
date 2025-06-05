import { Component, OnInit } from '@angular/core';
import { IdolService } from '../../services/idol.service';

@Component({
  selector: 'app-cuerpo',
  imports: [],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo implements OnInit {

  //Atributos
  public listadoIdols: Idol[];
  public idolService: IdolService;

  //Constructores
  constructor(idolService: IdolService) {
    this.idolService = idolService;
    this.listadoIdols = this.idolService.getIdols();
  }

ngOnInit(): void {
  
}
  //Métodos
}
