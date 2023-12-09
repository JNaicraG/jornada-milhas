import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private promocaoService:PromocaoService){}
  
  promocoes:Promocao[] = [];

  ngOnInit(): void {
    this.promocaoService.listar().subscribe(lista => this.promocoes=lista);
  }
}
