import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CadastroAgendaComponent } from './cadastro-agenda/cadastro-agenda.component';
import { CadastroEntradasComponent } from './cadastro-entradas/cadastro-entradas.component';
import { CadastroSaidasComponent } from './cadastro-saidas/cadastro-saidas.component';
import { PainelComponent } from './painel/painel.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'cadastro-agenda', component: CadastroAgendaComponent },
  { path: 'cadastro-entrada', component: CadastroEntradasComponent },
  { path: 'cadastro-saida', component: CadastroSaidasComponent },
  { path: 'painel', component: PainelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
