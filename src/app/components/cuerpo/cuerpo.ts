import { Component, OnInit } from '@angular/core';
import { IdolService } from '../../services/idol.service';
import { CommonModule } from '@angular/common';
import { ListadoTablas } from "../listado-tablas/listado-tablas";
import { ListadoTarjetas } from '../listado-tarjetas/listado-tarjetas';
import { Home } from "../home/home";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cuerpo',
  imports: [CommonModule,
            ListadoTablas,
            ListadoTarjetas,
            Home,
            RouterOutlet
          ],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo {

}
