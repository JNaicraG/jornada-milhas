import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
//import { MatNativeDateModule } from '@angular/material/core'; //Solução Alura

//import {default as _rollupMoment} from 'moment';
//import * as _moment from 'moment';

//const moment = _rollupMoment || _moment

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  constructor(
    public formBuscaService:FormBuscaService){
  }

  buscar():void{
    console.log(this.formBuscaService.formBusca.value)
  }


}
