import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalhesClimaPageRoutingModule } from './detalhes-clima-routing.module';
import { DetalhesClimaPage } from './detalhes-clima.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesClimaPageRoutingModule,
    SharedModule
  ],
  declarations: [
    DetalhesClimaPage
  ]
})
export class DetalhesClimaPageModule {}
