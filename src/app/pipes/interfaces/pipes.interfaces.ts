
export enum Color { rojo, negro, azul, amarillo, verde }

export enum Genero { masculino, femenino, otro }

export interface Heroe {
    nombre: string;
    vuela: boolean;
    genero: Genero;
    color: Color;

}