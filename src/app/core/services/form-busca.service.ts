import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca:FormGroup;

  constructor(
    private dialog:MatDialog
    ) {
    this.formBusca = new FormGroup({
      somenteIda:new FormControl(false), //valor padrão: false
      somenteVolta: new FormControl(null),
      destino: new FormControl(null)
    });
   }

   
   obterControle(nome:string):FormControl{
    const control = this.formBusca.get(nome);
    if(!control)
      throw new Error(`Controle de formulário ${nome} não encontrado`);
      
    return control as FormControl;
  }

  openDialog():void{
    this.dialog.open(ModalComponent,{
      width:'50%'
    });
  }
}
