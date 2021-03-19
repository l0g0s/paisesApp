import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button { margin:5px}
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = ''

  listaPaises: Country[] = []

  constructor(private paisService:PaisService){}

  activarRegion(termino: string){
    if(this.regionActiva == termino) return
    this.regionActiva = termino
    this.listaPaises = []

    this.paisService.buscarRegion(this.regionActiva)
      .pipe( tap(console.log))
      .subscribe( paises => {
        this.listaPaises = paises
      }
      ) 
  }

  getClaseCSS(region:string):string {
    return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }

}
