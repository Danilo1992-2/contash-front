import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroEntradasComponent } from './cadastro-entradas/cadastro-entradas.component';
import { CadastroSaidasComponent } from './cadastro-saidas/cadastro-saidas.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CadastroAgendaComponent } from './cadastro-agenda/cadastro-agenda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    CadastroEntradasComponent,
    CadastroSaidasComponent,
    AgendaComponent,
    CadastroAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
