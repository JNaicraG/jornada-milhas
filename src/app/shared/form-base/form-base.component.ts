import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/types';
import { FormValidations } from '../formValidations';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  estadoControl:FormControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  cadastroForm!:FormGroup;

  @Input() paginaPerfil: true | false = false;

  @Input() set nomePerfil(value:string | 'nome'){
    this.titulo = `Olá, ${value}`;
  }


  @Output() acaoClique:EventEmitter<any> = new EventEmitter<any>();
  @Output() sair:EventEmitter<any> = new EventEmitter<any>();
  
  titulo:string = '';
  classTitulo:string = '';
  classBotao:string = '';

  constructor(
    private formularioService:FormularioService,
    private formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.classTitulo =  this.paginaPerfil ? 'acessoPerfil' : 'centralizar';
    this.classBotao =  this.paginaPerfil ? 'grid-container' : 'centralizar';
    this.titulo =  !this.paginaPerfil ?  'Crie sua conta' : this.titulo;

    
    this.cadastroForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [null, [Validators.required,Validators.minLength(3), FormValidations.equalTo('senha')]],
      nome: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      cpf: [null, [Validators.required,Validators.pattern('^[0-9]{11}$')]],
      telefone: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      cidade: [null , [Validators.required]],
      estado: this.estadoControl,
      aceitarTermos:[null, [Validators.requiredTrue]]
    });

    if(this.paginaPerfil){
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    }else{
      this.cadastroForm.get('aceitarTermos')?.setValidators(Validators.requiredTrue);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setFormulario(this.cadastroForm);
    
  }



  executarAcao():void{
    this.acaoClique.emit();
  }

  deslogar():void{
    this.sair.emit();
  }

}
