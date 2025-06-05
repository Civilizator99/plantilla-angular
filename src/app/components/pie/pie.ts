import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  imports: [CommonModule],
  templateUrl: './pie.html',
  styleUrl: './pie.css'
})
export class Pie {
  public fechaActual: Date;


  constructor(){
    this.fechaActual = new Date();
  }
}
