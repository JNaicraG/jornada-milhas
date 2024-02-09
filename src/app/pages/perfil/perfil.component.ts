import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, startWith, tap } from 'rxjs';
import { TokenService } from 'src/app/core/service/token.service';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent implements OnInit {


  //nomeSubjectPerfil:BehaviorSubject<string> = new BehaviorSubject<string>('nome');
  //nomePerfil$ = this._nomeSubjectPerfil.asObservable();
  nomePerfil!:string;
  paginaPerfil: boolean = true;
  token!: string;
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;
  carregou: boolean = false;
  

  constructor(
    private tokenService: TokenService,
    private formularioService: FormularioService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(pessoa => {
      this.cadastro = pessoa;
      //this.nomeSubjectPerfil.next(this.cadastro.nome);
      //this._nomePerfil$.subscribe(value => this.nomePerfil = value);
      this.nomePerfil = this.cadastro.nome;
      this.carregarFormulario();
    });

  }

  carregarFormulario() {
    this.form = this.formularioService.getFormulario();

    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      cidade: this.cadastro.cidade,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      telefone: this.cadastro.telefone,
      estado: this.cadastro.estado
    });

    
  }

  atualizar(): void {
    console.log('Atualizando')
  }

  deslogar(): void {
    console.log('Deslogar');
  }

}
