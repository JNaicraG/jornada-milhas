import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  estadoControl:FormControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  @Input() paginaPerfil: true | false = true;
  @Input() nomePerfil:string = 'Nome';

  titulo:string = '';
  classTitulo:string = '';

  cadastroForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    ////Inicializando junto da renderização para confirmar que temos o valor passado pelo pai
    this.classTitulo =  this.paginaPerfil ? 'acessoPerfil' : 'centralizar';
    this.titulo =  !this.paginaPerfil ?  'Crie sua conta' : `Olá, ${this.nomePerfil}`;

    this.cadastroForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    })
  }
}
