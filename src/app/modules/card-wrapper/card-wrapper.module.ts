import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from '../../forms/card-wrapper/card-wrapper.component';
import { MaterialModule } from '../material/material.module';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardWrapperComponent}
];

@NgModule({
  declarations: [
    CardWrapperComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class CardWrapperModule { }
