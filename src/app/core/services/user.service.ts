import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/types';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private tokenService:TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarToken();
    }
   }

   decodificarToken(){
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;
    this.userSubject.next(user);
   }

   retornarUser(){
    return this.userSubject.asObservable();
   }

   salvarToken(token:string){
    this.tokenService.salvarToken(token);
    this.decodificarToken();
   }

   logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
   }

   estaLogado(){
    return this.tokenService.possuiToken();
   }
}
