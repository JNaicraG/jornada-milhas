import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  //onSubmit(value:any):void{
  //  console.log(value + 'aaaaaaaaaa');
  //}

  constructor(
    public formBuscaService:FormBuscaService
  ){}


  onSubmit(value:any){
    console.log("AAAAAAAA" + value)
  }

}
