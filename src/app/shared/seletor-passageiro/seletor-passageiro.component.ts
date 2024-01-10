import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef( () => SeletorPassageiroComponent), //Usar classe que existe em tempo de compilação, o que não ocorre com o SeletorPassageiroComponent, o forwardRef fala para o angular esperar e pegar a referencia depois da compilaçao, quando nossa classe existe
                                    //Retorna a classe que quermos
      multi:true //pode ser provido em múltiplos lugares diferentes
    }
  ]
})
                                                  //Responsável por implementar interface que recebe controles de formulário como param do component
export class SeletorPassageiroComponent implements ControlValueAccessor{
  
  @Input() titulo:string = '';
  @Input() subTitulo:string = '';


  value:number = 0;
  onChange = (val:number) => {}
  onTouch =() => {}

  constructor(
    public formBuscaService:FormBuscaService
  ){}
  
  //Responsável por amazenar e escrever o valor do nosso input
  writeValue(obj: any): void { //obj no caso é o nosso valor recebido
    this.value = obj;
  }

  //Faz o vínculo com a alteração desse valor e o formulário dinâmico
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(value:any){
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }

}


/*
writeValue(value: any): Este método é chamado pelo Angular Forms para atualizar o valor do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e estado interno de acordo com o novo valor.
registerOnChange(fn: any): Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado sempre que houver alterações em seu valor interno. O componente deve chamar essa função sempre que o valor for alterado para notificar o Angular Forms sobre as alterações.
registerOnTouched(fn: any): Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado quando ele for tocado ou sofrer uma alteração no estado de foco. O componente deve chamar essa função sempre que ocorrer uma interação com ele, como um clique ou foco.
setDisabledState(isDisabled: boolean): Este método é usado para definir o estado de desabilitado do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e comportamento de acordo com o estado de desabilitado.
*/