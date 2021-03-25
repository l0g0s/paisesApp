import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  
  //i18nSelect
  personas = ["Fernando" , "Susana"  , "Antonio"  , "Alicia"  , "XXXX"  ]
  generos =  ["masculino", "femenino", "masculino", "femenino", "other"]
  index:number = 0
  nombre:string = this.personas[this.index]
  genero:string = this.generos[this.index]
  invitaMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'other': 'invitarle',
  }

  //i18nPlural
  clientes = this.personas.slice()
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando',
  }


  cambiarPersona(){
    if(this.index==this.personas.length-1) 
      this.index=0
    else 
      this.index++
    this.nombre = this.personas[this.index]
    this.genero = this.generos[this.index]
  }

  borrarCliente(){
    if (this.clientes.length==0)
      this.clientes = this.personas.slice()
    else
      this.clientes.shift()
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3....

  valorPromesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
      resolve('Tenemos datos de una promesa')
    }, 3500 )

  })

}
