import { Injectable } from '@angular/core';
import { UnidadeFederativa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class UnidadeFederativaService {

  private cache$?:Observable<UnidadeFederativa[]>;
  private apiUrl:string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  listar():Observable<UnidadeFederativa[]>{
    if(!this.cache$){
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestEstados():Observable<UnidadeFederativa[]>{
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
