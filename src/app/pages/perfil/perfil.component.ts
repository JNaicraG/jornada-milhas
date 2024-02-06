import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent {
  nomePerfil:string ='nome';
  paginaPerfil:boolean=true;

  atualizar():void{
    console.log('Atualizando')
  }

  deslogar():void{
    console.log('Deslogar');
  }

}
