import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';
import { MaterialModule } from '../../material/material.module';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { RouterModule, Routes } from '@angular/router';
import { CardItemComponent } from 'src/app/components/cards/card-item/card-item.component';

const routes: Routes = [
  {path: '', component: CardWrapperComponent},
  {path: 'item-details/:id', component: CardItemComponent}
];

@NgModule({
  declarations: [
    CardWrapperComponent,
    CardsComponent,
    CardItemComponent
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
