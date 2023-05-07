import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula, PeliculasService } from '../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  peliculas: Pelicula[];
  @Output() datosPelicula = new EventEmitter<Pelicula>();

  constructor(public servicio: PeliculasService, private router: Router) {
    this.peliculas = this.servicio.getMovies();

  }

  enviarDatos(pelicula: Pelicula,  event: any){
    event.preventDefault();
    this.datosPelicula.emit(pelicula);
    this.router.navigateByUrl('/contenido/compra');
  }
}
