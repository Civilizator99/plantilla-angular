import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListadoTablas } from './components/listado-tablas/listado-tablas';
import { ListadoTarjetas } from './components/listado-tarjetas/listado-tarjetas';

export const routes: Routes = [
    {path: "", component: Home, pathMatch: 'full' },
    {path: "listado-tablas", component: ListadoTablas},
    {path: "listado-tarjetas", component: ListadoTarjetas},
    {path: "**", redirectTo: ""}
];
