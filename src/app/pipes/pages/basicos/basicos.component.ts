import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "ballena"
  nombreUpper: string = "BALLENA"
  nombreCompleto: string = "bAllEnA de maR"
  fecha: Date = new Date()

}
