import { UserService } from './../../core/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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


  nomePerfil!:string;
  paginaPerfil: boolean = true;
  token!: string;
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;
  

  constructor(
    private tokenService: TokenService,
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private userService:UserService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(pessoa => {
      this.cadastro = pessoa;
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
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      cidade: this.form?.value.cidade,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      telefone: this.form?.value.telefone,
      estado: this.form?.value.estado
    }
    this.cadastroService.atualizarCadastro(dadosAtualizados,this.token).subscribe({
      next:()=>{
        alert('Cadastro atualizado com sucesso!');
        this.route.navigate(['/']);
      },
      error:(err)=>{
        console.log('Erro ao atualizar cadastro:', err);
      }
    })
  }

  deslogar(): void {
    this.userService.logout();
    this.route.navigate(['/login']);
  }

}
