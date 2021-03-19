import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [PipesComponent],
  imports: [
    CommonModule,
    ButtonModule,CardModule
  ],exports:[
    PipesComponent
  ]
})
export class PipesModule { }
