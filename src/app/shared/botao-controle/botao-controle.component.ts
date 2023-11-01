import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input()  operacao:'incrementar' | 'decrementar' = 'incrementar'; 
  @Output()  submitEvent = new EventEmitter<Number>();

  onSubmit():void{
    const value =  this.operacao ==='incrementar' ?  1 : -1
    this.submitEvent.emit(value);
  }
}
