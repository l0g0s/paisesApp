import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent 
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent,
    SidebarComponent
  ]
})

export class SharedModule { 

}
