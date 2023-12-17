import { Depoimento } from './../../core/types/types';
import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})


export class DepoimentosComponent implements OnInit {

  depoimentos:Depoimento[] = [];

  constructor(private depoimentoService:DepoimentoService){

  }
  ngOnInit(): void {
    this.depoimentoService.listar().subscribe(data => this.depoimentos = data);
  }
}
