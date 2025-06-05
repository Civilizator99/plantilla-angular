import { Component, OnInit } from '@angular/core';
import { IdolService } from '../../services/idol.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-tarjetas',
  imports: [CommonModule],
  templateUrl: './listado-tarjetas.html',
  styleUrl: './listado-tarjetas.css'
})
export class ListadoTarjetas implements OnInit {
  public idols: Idol[];


  constructor(public idolService: IdolService){
  this.idols = [];
}
  ngOnInit(): void {
    //LLamada al servicio, se debe hacer siempre desde el método ng OnInit para no hacerlo desde el constructor
    this.idols = this.idolService.getIdols();
  }
}


