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

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```
ng g m moduleName
ng g c componentName --skipTests -is
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
app-routing.module.ts - Muestra componente según la ruta  
-> crear app-routing.module.ts  
-> import RouterModule.forRoot(routes)  
-> export RouterModule  
-> generar const routes: Routes = [ path='',component: xxx ...  
-> importar AppRoutingModule donde lo vayas a usar  
-> en html usar <router-outlet></router-outlet>  
y luego en el sidebar  
-> importa   
-> en html referencia:  
    <li routerLink="region"  
        routerLinkActive="active"  
        [routerLinkActiveOptions]="{exact: true}"  
        class="list-group-item">  
        Buscar país  
    </li>  
```
const routes: Routes = [{
        path: '', component: PorPaisComponent, pathMatch: 'full'
    },{
        path: 'region', component: PorRegionComponent
    },{
        path: 'pais/:id', component: VerPaisComponent
    }]
```

---

# GIT

Repository in https://github.com/
- In github create new repository ej.`angular-basicos` https://github.com/l0g0s/angular-basicos.git
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

## animate.style - estilos animados para hacer más agradable la vista de la web
https://animate.style/

## restcountries.eu - API paises del mundo
https://restcountries.eu/#api-endpoints-name