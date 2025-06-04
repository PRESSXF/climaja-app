import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'detalhes-clima/:cidade',
    loadChildren: () => import('./detalhes-clima/detalhes-clima.module').then(m => m.DetalhesClimaPageModule)
  },
  {
    path: 'historico-clima',
    loadChildren: () => import('./historico-clima/historico-clima.module').then(m => m.HistoricoClimaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
