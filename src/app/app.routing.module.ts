import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
//cria o array de rotas
export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
];
//importa o modulo router module, ultiza o metodo estatico que eles nos proporciona chamado for root e passa esse array de rotas que nos configuramos e logo em seguida eu exporto ele
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
