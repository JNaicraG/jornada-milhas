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
import { ModalComponent } from './shared/modal/modal.component';




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
    ModalComponent
  ],
  imports: [
    BrowserModule,
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
    MatDatepickerModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-br'
  },{
    provide:MAT_DATE_LOCALE,
    useValue:'pt-br'
  },{
    provide:DateAdapter,
    useClass:MomentDateAdapter,
    deps:[MAT_DATE_LOCALE, MAT_DATE_FORMATS]
  },{
  provide:MAT_DATE_FORMATS,
  useValue:MAT_MOMENT_DATE_FORMATS
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
