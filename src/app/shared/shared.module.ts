import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturaPipe } from '../pipes/temperatura.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [
    TemperaturaPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemperaturaPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
