import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})


export class ContadorComponent {
  @Input() contador:number = 0;
  @Output()  submitEvent = new EventEmitter<Number>();
  
  onSubmit(value:any):void{
    if(this.contador==0 && value < 0)
      this.contador = 0;
    else
      this.contador+=value;
    this.submitEvent.emit(this.contador)
  }
}
