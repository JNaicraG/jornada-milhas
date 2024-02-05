import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  estadoControl:FormControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  cadastroForm!:FormGroup;

  @Input() paginaPerfil: true | false = true;
  @Input() nomePerfil:string = 'Nome';
  @Output() acaoClique:EventEmitter<any> = new EventEmitter<any>();
  
  titulo:string = '';
  classTitulo:string = '';

  constructor(
    private formularioService:FormularioService,
    private formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.classTitulo =  this.paginaPerfil ? 'acessoPerfil' : 'centralizar';
    this.titulo =  !this.paginaPerfil ?  'Crie sua conta' : `Olá, ${this.nomePerfil}`;

    this.cadastroForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      nome: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      cpf: [null, [Validators.required,Validators.pattern('^[0-9]{11}$')]],
      telefone: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      cidade: [null , [Validators.required]],
      estado: this.estadoControl,
      aceitarTermos:[null, [Validators.requiredTrue]]
    });

    this.formularioService.setFormulario(this.cadastroForm);
  }



  executarAcao():void{
    this.acaoClique.emit();
  }

}
