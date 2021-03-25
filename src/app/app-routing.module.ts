import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PipesComponent } from './pipes/pages/pipes.component';
import { BasicosComponent } from './pipes/pages/basicos/basicos.component';
import { NoComunesComponent } from './pipes/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pipes/pages/numeros/numeros.component';
import { OrdenarComponent } from './pipes/pages/ordenar/ordenar.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },{
        path: 'basicos',
        component: BasicosComponent
    },{
        path: 'capital',
        component: PorCapitalComponent
    },{
        path: 'numeros',
        component: NumerosComponent
    },{
        path: 'pais/:id',
        component: VerPaisComponent
    },{
        path: 'region',
        component: PorRegionComponent
    },{
        path: 'pipes',
        component: PipesComponent
    },{
        path: 'nocomunes',
        component: NoComunesComponent
    },{
        path: 'ordenar',
        component: OrdenarComponent
    },{
        path: '**',
        redirectTo:''
    }

]
    
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }