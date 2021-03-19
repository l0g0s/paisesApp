import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false

  listaPaises: Country[] = []

  constructor(private paisService:PaisService){}

  buscar(termino: string){
    this.hayError = false
    this.termino = termino
    this.listaPaises = []

    this.paisService.buscarCapital(this.termino)
      .subscribe( paises => {
        this.listaPaises = paises
      }, (err) => {
        this.hayError = true
      }
      ) 
  }

  sugerencias(termino:string){
    this.hayError = false
  }


}
