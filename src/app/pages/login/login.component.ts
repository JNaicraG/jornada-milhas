import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(
    private autenticacaoService:AutenticacaoService,
    private route:Router,
    private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  login():void{
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;
    this.autenticacaoService.autenticar(email,senha).subscribe({
      next: (value) => {
        console.log("Logou com sucesso! ", value);
        this.route.navigateByUrl('/');
      },
      error: (err) => {
        console.log("Erro ao logar! ", err, email, senha);
      }
    })
  }
  
}

