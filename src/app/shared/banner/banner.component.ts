import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  //Decorator para simbolizar que essas propriedades são de entrada - recebidos e injetados no componente por outro
  @Input() src: string = '';
  @Input() alt: string = '';
}
