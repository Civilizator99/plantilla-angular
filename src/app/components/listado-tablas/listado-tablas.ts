import { Component } from '@angular/core';
import { IdolService } from '../../services/idol.service';

@Component({
  selector: 'app-listado-tablas',
  imports: [],
  templateUrl: './listado-tablas.html',
  styleUrl: './listado-tablas.css'
})
export class ListadoTablas {

  //Atributos
  public listadoIdols: Idol[];
  //public idolService: IdolService;

  //Constructores
  // constructor(idolService: IdolService) {
  //   this.idolService = idolService;
  //   this.listadoIdols = this.idolService.getIdols();
  // }

  constructor(public idolService: IdolService) {
    this.listadoIdols = this.idolService.getIdols();
  }

  ngOnInit(): void {

  }
  //Métodos
}
