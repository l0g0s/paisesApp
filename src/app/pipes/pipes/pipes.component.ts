import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [`
      html, body {
          margin: 5px;
          background-color: var( --surface-b );
          font-family: var( --font-family );
      }


      .text-layout{
          color: var(--text-color)
      }  
  `]
})
export class PipesComponent {

  nombre: string = "Fernando"
  valor : number = 1000

  mostrarNombre(){
    console.log(this.nombre)
  }
}
