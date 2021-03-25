import { Component } from '@angular/core';
import { Color, Genero, Heroe } from '../../interfaces/pipes.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus: boolean = true
  col = Color
  gen = Genero
  ordernarPor: string = "nombre"
  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela : true,
      color : Color.azul,
      genero: Genero.masculino
    },
    {
      nombre: "Wonder Woman",
      vuela : true,
      color : Color.rojo,
      genero: Genero.femenino
    },
    {
      nombre: "Batman",
      vuela : false,
      color : Color.negro,
      genero: Genero.masculino
    },
    {
      nombre: "Robin",
      vuela : false,
      color : Color.amarillo,
      genero: Genero.masculino
    },
    {
      nombre: "Catwoman",
      vuela : false,
      color : Color.negro,
      genero: Genero.femenino
    },
    {
      nombre: "Daredevil",
      vuela : false,
      color : Color.rojo,
      genero: Genero.masculino
    },
    {
      nombre: "Gamora",
      vuela : false,
      color : Color.verde ,
      genero: Genero.femenino
    }


  ]

  toggleMayus(){
    this.enMayus = !this.enMayus
  }

  toggleOrderNombre(){
    if(this.ordernarPor=="nombre")
       this.ordernarPor = "nombreDesc"
    else
      this.ordernarPor = "nombre"
  }

  toggleOrderVuela(){
    if(this.ordernarPor=="vuela")
       this.ordernarPor = "vuelaDesc"
    else
      this.ordernarPor = "vuela"
  }

  toggleOrderColor(){
    if(this.ordernarPor=="color")
       this.ordernarPor = "colorDesc"
    else
      this.ordernarPor = "color"
  }
}
