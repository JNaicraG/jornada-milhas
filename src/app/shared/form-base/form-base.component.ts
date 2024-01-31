import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent {
  estadoControl:FormControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  constructor(){
  }
}
