import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../interfaces/pipes.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(h: Heroe[], orderBy: string = 'nombre' ): Heroe[] {
    
    if(orderBy=="nombre")
      h = h.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 )
    else if(orderBy=="color")
      h = h.sort( (a,b) => ( Color[a.color] > Color[b.color] ) ? 1 : -1 )
    else if(orderBy=="colorNum")
      h = h.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 )
    else if(orderBy=="vuela")
      h = h.sort( (a,b) => ( a.vuela > b.vuela ) ? 1 : -1 )
    else if(orderBy=="nombreDesc")
      h = h.sort( (a,b) => (a.nombre < b.nombre) ? 1 : -1 )
    else if(orderBy=="colorDesc")
      h = h.sort( (a,b) => ( Color[a.color] < Color[b.color] ) ? 1 : -1 )
    else if(orderBy=="colorNumDesc")
      h = h.sort( (a,b) => ( a.color < b.color ) ? 1 : -1 )
    else if(orderBy=="vuelaDesc")
      h = h.sort( (a,b) => ( a.vuela < b.vuela ) ? 1 : -1 )


      return h;
  }

}
