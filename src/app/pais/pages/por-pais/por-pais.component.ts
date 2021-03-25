import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li { cursor: pointer; }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false

  listaPaises: Country[] = []
  listaPaisesSugeridos: Country[] = []

  constructor(private paisService:PaisService){}

  buscar(termino: string){
    this.hayError = false
    this.termino = termino
    this.listaPaises = []
    this.listaPaisesSugeridos = []

    this.paisService.buscarPais(this.termino)
      .subscribe( 
        paises => {
          this.listaPaises = paises
        }, (err) => {
          this.hayError = true
        }
      ) 
  }

  sugerencias(termino:string){
    this.hayError = false
    if(termino==""){
      this.listaPaisesSugeridos = []
      return
    }
    this.paisService.buscarPais(termino)
      .subscribe( 
        paises => {
          this.listaPaisesSugeridos = paises.splice(0,5)
      },(err) => {
        this.listaPaisesSugeridos = []
      }
      )
  }

}
