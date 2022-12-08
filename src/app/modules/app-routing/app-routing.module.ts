import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardWrapperComponent } from 'src/app/forms/card-wrapper/card-wrapper.component';
import { PeriodicTableComponent } from 'src/app/forms/periodic-table/periodic-table.component';

const routes: Routes = [
  // {path: '', component: CardWrapperComponent},
  {
    path: 'cards', 
    loadChildren: () => import('../card-wrapper/card-wrapper.module').then(m => m.CardWrapperModule)
  },
  {
    path: 'periodic-table', 
    loadChildren: () => import('../periodic-table/periodic-table.module').then(m => m.PeriodicTableModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
