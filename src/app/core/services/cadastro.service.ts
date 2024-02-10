import { PessoaUsuaria } from './../types/types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  cadastrar(pessoa:PessoaUsuaria):Observable<PessoaUsuaria>{
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`,pessoa);
  }

  //buscarCadastro(token:string):Observable<PessoaUsuaria>{
  //  //const headers= new HttpHeaders({
  //  //  'Authorization':`Bearer ${token}`
  //  //});
  //  return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,{headers});
  //}

  //atualizarCadastro(pessoa:PessoaUsuaria, token:string):Observable<PessoaUsuaria>{
  //  //const headers= new HttpHeaders({
  //  //  'Authorization':`Bearer ${token}`
  //  //});

  //  return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,pessoa,{headers});
  //}
  buscarCadastro():Observable<PessoaUsuaria>{
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }

  atualizarCadastro(pessoa:PessoaUsuaria):Observable<PessoaUsuaria>{
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,pessoa);
  }
}
