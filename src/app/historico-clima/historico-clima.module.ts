import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HistoricoClimaPage } from './historico-clima.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HistoricoClimaPage }])
  ],
  declarations: [HistoricoClimaPage]
})
export class HistoricoClimaPageModule {}
