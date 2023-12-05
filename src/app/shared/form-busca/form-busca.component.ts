import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
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

  constructor(public dialog:MatDialog){
    

  }

  openDialog():void{
    this.dialog.open(ModalComponent,{
      width:'50%'
    });
  }

}
