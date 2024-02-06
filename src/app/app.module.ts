import { NgModule, LOCALE_ID, Input } from '@angular/core';
import locale_pt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import {MatDatepickerModule} from '@angular/material/datepicker';
//npm i @angular/material-moment-adapter 
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
//import {MatNativeDateModule} from '@angular/material/core';

import { ModalComponent } from './shared/modal/modal.component';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { ContadorComponent } from './shared/contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { DepoimentosComponent } from './shared/depoimentos/depoimentos.component';
import { PromocoesComponent } from './shared/promocoes/promocoes.component';
import { SeletorPassageiroComponent } from './shared/seletor-passageiro/seletor-passageiro.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


registerLocaleData(locale_pt);

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    ContadorComponent,
    DropdownUfComponent,
    DepoimentosComponent,
    PromocoesComponent,
    SeletorPassageiroComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    //MatNativeDateModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-br'
  },{
    provide:MAT_DATE_LOCALE,
    useValue:'pt-br'
  },
  {
    provide:DateAdapter,
    useClass:MomentDateAdapter,
    deps:[MAT_DATE_LOCALE, MAT_DATE_FORMATS]
  },
  {
  provide:MAT_DATE_FORMATS,
  useValue:MAT_MOMENT_DATE_FORMATS
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
