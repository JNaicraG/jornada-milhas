import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit{

  promocoes:Promocao[] = [];

  constructor(private promocaosService:PromocaoService){

  }
  ngOnInit(): void {
    this.promocaosService.listar().subscribe(data => this.promocoes = data);
  }
}
