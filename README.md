# [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

# TypeScript - ES2021

## `node_modules` generation
if *node_modules* is missing, execute:
```
npm install
```

## start server
to initialize app with node, execute: 
```
npm start
```
(Remember execute this command in the same folder where the file `package.json` is)

### change port
default port is ```8081```, you can change it in ```package.json``` >> scripts. There is the sentences to launch the server:
```
"start": "webpack-dev-server --mode development --open --port=8081"
```
simply change port.

TypesScript Types: - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
`?` - Optional Properties
`!` - Non-null assertion operator - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

---

# AngularCLI

to create angularCLI app, execute:
```
ng new appName
```
- Enforce stricter type: `Y`
- Angular routing: `N or Y` for easy work
- Styles types: `CSS`
- ...can take a while...

## Development server

to start angularCLI development app, execute:
```
ng serve -o
```
` -o ` means to open server automaticly - or Navigate to `http://localhost:4200/`

to start angularCLI PRO app, execute:
```
ng build --prod
```
The build artifacts will be stored in `dist/`. Use `--prod` for production build.

## Code scaffolding

Run `ng generate component componentName` to generate a new component.   
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`:  
```
ng g m moduleName
ng g c componentName --skipTests -is
ng g pipe pipeName   --skipTests
ng g s app/services/app --skipTests
```
`--skipTests` skip test generation -  `-is` skip styles (css) generation

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Angular

## html way
` [xxx] ` one way exclusive from back to front - eg.`[name]` 
` (xxx) ` one way exclusive from front to back - eg.`(clic)`
`[(xxx)]` two way in-out - eg. `<input type="text" name="termino" [(ngModel)]="termino" placeholder="Buscar..."/>`

## input - recibe desde otro componente
en pais-tabla.component  
`@Input() tablaPaises: Country[] = []`  
en por-pais.component.html  
`<app-pais-tabla [tablaPaises]="listaPaises"></app-pais-tabla>`  

## output - envía 
```
@Output() onEnter: EventEmitter<string> = new EventEmitter()
buscar(){
    this.onEnter.emit( this.termino )
}
```
## locale Language-Country
Go to `app.module.ts` and add    
```
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs)
...
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],

```

## ngIf
Eg.: `<div *ngIf="hayError"`

## ngFor
Eg.: `<tr *ngFor="let item of items; let i = index">`

## Module and Component
`ng new test` creates `app.module.ts`  
Generate new module: `ng g m testMod` creates `src/app/test-mod/test-mod.module.ts`  
Generate new component: `ng g c test-mod/testComp --skipTests -is` creates `src/app/test-mod/test-comp/test-comp.component.ts`  
(also updates `test-mod.module.ts`)  
To show testComp in app component first export component in testMod module, then import module in app.module, the show testComp selector in app.component.html, like this:   
in `test-mod.module.ts` add: `exports:[TestCompComponent]`  
in `app.module.ts` add: `imports:[TestModModule]`  
in `app.component.html` add: `<app-test-comp></app-test-comp>`  

## routing 
- create `app-routing.module.ts` - to show components on route  
- import special way: `import RouterModule.forRoot(routes)`  
- and export too: `export RouterModule`  
- generate routes:  
``` 
const routes: Routes = [{ 
        path: '', component: PorPaisComponent, pathMatch: 'full' 
    },{ path: 'region', component: PorRegionComponent 
    },{ path: 'pais/:Code', component: VerPaisComponent }] 
```
- import `AppRoutingModule` where its going to be used (or `RouterModule`)  
- in html use this: `<router-outlet></router-outlet>` where component should appear     
- if reference in ***sidebar***  
```
    <li routerLink="region"  
        routerLinkActive="active"  
        [routerLinkActiveOptions]="{exact: true}"  
        class="list-group-item">  
        Buscar país  
    </li>  
```
- if reference from other ***component***  
eg.: `<a [routerLink]="['/pais', p.alpha2Code]">Ver...</a>`  

## httpRequests
In app.module.ts `import HttpClientModule` desde `import { HttpClientModule } from '@angular/common/http';`  
In ***service*** import httpClient like this: `constructor(private http:HttpClient){`  
Optional set params eg.:
```
    const params = new HttpParams().set('key',this.value)
``` 
In function make http GET and then subscript, eg.:  
```
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe( (resp) =>{
        this.resultados = resp.data
      })  
```

## Pipes
https://angular.io/api?query=pipe



---

# GIT

Repository in https://github.com/
- In github create new repository eg.`angular-basicos` https://github.com/l0g0s/angular-basicos.git
- In local start/reset repository
```
git init
git add . // add all
git commit -m "first commit"
```
- PUSH:
```
git remote add origin https://github.com/l0g0s/angular-basicos.git
git branch -M main
git push -u origin main
```
- TAG
```
git tag -a v0.1.0 -m "Fin sección 4"
git tag
git push --tags
```
to convert it to release tag in github.com select the tag, select version, select edit, set name and press "update release"

---

# Notes

## VSCode

VSCode debugger: F5

## JavaScript

aboid send by reference, example:
```
   return [...this.myList]
```
`...` operator *spread*. -> Separates each element of the array and create a new one.
See more: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

LocalStorage and SessionStorage lets you save information in navegator
```
localStorage.setItem("historial",JSON.stringify(this._historial))
this._historial = JSON.parse( localStorage.getItem("historial")! ) || []
```

## array sort
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

## netlify server - servidor web
https://www.netlify.com/

## bootstrap - estilos
https://getbootstrap.com/
shortcut: write `.row` + TAB -> writes: `<div class="row"></div>`
same with `.col` ...

## developers.giphy.com - buscador de gifs con API que vamos a usar
https://developers.giphy.com/
https://developers.giphy.com/docs/api/endpoint#search

## quicktype.io - convierte de jSON a lo que quieras
https://quicktype.io/  
- language TypeScript  
- interfaces only  
- verify JSON  

## animate.style - estilos animados para hacer más agradable la vista de la web
https://animate.style/

## restcountries.eu - API paises del mundo
https://restcountries.eu/#api-endpoints-name

## primeNG - librería de componentes para angular
https://www.primefaces.org/primeng/
npm install primeng primeicons
add in angular.json:
```
            "styles": [
              "src/styles.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/saga-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"              
            ],
```