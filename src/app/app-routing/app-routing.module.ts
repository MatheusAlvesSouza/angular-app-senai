import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheVagaComponent } from '../detalhe-vaga/detalhe-vaga.component';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';

const routes: Routes = [
  { path: 'mural-vagas', component: MuralVagasComponent },
  { path: 'detalhe-vaga/:id', component: DetalheVagaComponent },
  { path: '', redirectTo: '/mural-vagas', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
