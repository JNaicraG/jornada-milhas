import { PessoaUsuaria } from './../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
