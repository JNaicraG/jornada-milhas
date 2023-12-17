import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca:FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      somenteIda:new FormControl(false) //valor padrão: false
    });
   }

   
   obterControle(nome:string):FormControl{
    const control = this.formBusca.get(nome);
    if(!control)
      throw new Error(`Controle de formulário ${nome} não encontrado`);
      
    return control as FormControl;
  }
}
