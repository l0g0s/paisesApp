import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL:string = 'https://restcountries.eu/rest/v2'

  private filterURL:string = '?fields=name;capital;alpha2Code;flag;population'
  
  get  httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population')
  } 

  constructor(private http:HttpClient) { }

  buscarPais( termino:string ): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>( url, {params:this.httpParams} )
  }

  buscarCapital( termino:string ): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>( url, {params:this.httpParams} )
  }

  getPaisPorAlpha(id:string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<Country>( url )
  }

  buscarRegion( termino:string ): Observable<Country[]> {
    const url = `${this.apiURL}/region/${termino}`
    return this.http.get<Country[]>( url, {params:this.httpParams} )
  }

}
