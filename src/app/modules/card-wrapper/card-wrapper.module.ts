import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from '../../forms/card-wrapper/card-wrapper.component';
import { MaterialModule } from '../material/material.module';
import { CardsComponent } from 'src/app/components/cards/cards.component';

@NgModule({
  declarations: [
    CardWrapperComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    CardWrapperComponent
  ]
})
export class CardWrapperModule { }
