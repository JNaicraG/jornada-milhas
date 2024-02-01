import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  cadastroForm:FormGroup|null = null;

  getFormulario():FormGroup|null{
    return this.cadastroForm;
  }

  setFormulario(form:FormGroup){
    this.cadastroForm = form;
  }
}
