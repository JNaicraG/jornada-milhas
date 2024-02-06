import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent!:boolean;

  constructor(
    private formularioService:FormularioService,
    private cadastroService:CadastroService,
    private route:Router
    ){}

  cadastrar():void{
    const formCadastro = this.formularioService.getFormulario();
    console.log("Formulário",formCadastro?.value)
    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      //novoCadastro.nascimento = moment(novoCadastro.nascimento).format('DD/MM/YYYY'); //não usando mais moment
      //novoCadastro.nascimento = moment(novoCadastro.nascimento).format("YYYY-MM-DD[T]hh:mm:sss[Z]");
      console.log('Pessoa',novoCadastro)
      console.log('Estado',novoCadastro.estado.id)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next:(value)=>{
          console.log("Cadastro realizado com sucesso! ", value);
          this.route.navigateByUrl('/');
        },
        error:(err)=>{
          console.log("Erro ao cadastrar! ",err)
        }
      });
    }
  }
}
