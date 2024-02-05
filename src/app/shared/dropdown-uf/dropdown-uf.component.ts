import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, startWith, of , map} from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})

export class DropdownUfComponent implements OnInit{
@Input() label:string = '' ;
@Input() placeholder:string = '' ;
@Input() iconePrefixo:string = '' ;
@Input() myControl = new FormControl('', Validators.required);

unidadesFederativas:UnidadeFederativa[]=[];
unidadesFederativasFiltradas?:Observable<UnidadeFederativa[]>;
//unidadesFederativasFiltradas:UnidadeFederativa[]=[];


constructor(
  private unidadeFederativaService:UnidadeFederativaService,
  ){}


  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(listaUF => {
      this.unidadesFederativas = listaUF ;
      this.unidadesFederativasFiltradas = this._atualizarFiltro();
    });
    
    this.unidadesFederativasFiltradas = this._atualizarFiltro(); 
  }

  private _atualizarFiltro():Observable<UnidadeFederativa[]>{
    return this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string || '')),
      );
  }

  private _filter(value:string | UnidadeFederativa):UnidadeFederativa[]{
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    if(value === '')
      return this.unidadesFederativas;

    const filtredValue = nomeUf.toLowerCase();
    return this.unidadesFederativas.filter(uf => uf.nome.toLowerCase().includes(filtredValue))
   }

   displayFn(uFederativa:UnidadeFederativa):string{
    return uFederativa && uFederativa.nome ? uFederativa.nome : '';
   }

}
