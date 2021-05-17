import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman','Superman','Hulk','Batman','Linterna Verde','Constantine'];

  obtener: string = '';

  borrarHeroe(){
    //this.heroes.splice(0,1);
    const heroeBorrado = this.heroes.shift() || ''; //esto se hace cuando tira el error de no se puede asignar un string vacío
    this.obtener = heroeBorrado;
  }
 }