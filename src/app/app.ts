import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";
import { Cuerpo } from "./components/cuerpo/cuerpo";
import { Pie } from "./components/pie/pie";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Cuerpo, Pie, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'plantilla-angular';
}
