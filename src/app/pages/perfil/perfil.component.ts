import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from 'src/app/core/service/token.service';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent implements OnInit{


  nomePerfil!:string;
  paginaPerfil:boolean=true;
  token!:string;
  cadastro!:PessoaUsuaria;

  constructor(
    private tokenService:TokenService,
    private cadastroService:CadastroService
  ){}
  
  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(pessoa =>{
      this.cadastro = pessoa;
      this.nomePerfil = this.cadastro.nome;
    });

  }
  atualizar():void{
    console.log('Atualizando')
  }

  deslogar():void{
    console.log('Deslogar');
  }

}
