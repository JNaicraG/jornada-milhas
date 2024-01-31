import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(){
  }
  ngOnInit(): void {
    ////Inicializando junto da renderização para confirmar que temos o valor passado pelo pai
    this.classTitulo =  this.paginaPerfil ? 'acessoPerfil' : 'centralizar';
    this.titulo =  !this.paginaPerfil ?  'Crie sua conta' : `Olá, ${this.nomePerfil}`;
  }
}
