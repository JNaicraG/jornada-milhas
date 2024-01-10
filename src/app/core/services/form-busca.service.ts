import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
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
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo:new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas:new FormControl(0),
      bebes:new FormControl(0)
    });
   }

   getDescricaoPassageiros():string{
    let descricao = '';
    const adultos = this.formBusca.get('adultos')?.value;
    
    if(adultos && adultos>0){
      //descricao += adultos > 1 ? `${adultos} adultos` : `${adultos} adulto`; //falta check se separa por , ou não
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
    
    const criancas = this.formBusca.get('criancas')?.value;
    if(criancas && criancas>0){
      //descricao += criancas > 1 ? `${descricao},${criancas} crianças` : `${criancas} criança`;
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if(bebes && bebes>0){
      //descricao += bebes > 1 ? `${descricao},${bebes} bebes` : `,${bebes} bebe`;
      descricao += `${descricao ? ', ' : ''}${bebes} bebe${criancas > 1 ? 's' : ''}`;
    }

    return descricao;
   }


   alterarTipo(evento:MatChipSelectionChange,tipo:string){
    if(evento.selected){
      this.formBusca.patchValue({tipo,});
      //console.log(this.formBusca.get('tipo')?.value)
    }
   }

   alterarOrigem(origem:string){
    this.formBusca.patchValue({origem,})
   }

   alterarDestino(destino:string){
    this.formBusca.patchValue({destino,})
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

  
  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;
  
    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

}
