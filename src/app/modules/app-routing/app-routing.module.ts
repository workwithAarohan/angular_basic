import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { CardWrapperComponent } from 'src/app/forms/card-wrapper/card-wrapper.component';
// import { PeriodicTableComponent } from 'src/app/forms/periodic-table/periodic-table.component';
// import { HomeComponent } from 'src/app/forms/home/home.component';
// import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cards', 
    loadChildren: () => import('../card-wrapper/card-wrapper.module').then(m => m.CardWrapperModule)
  },
  {
    path: 'periodic-table', 
    loadChildren: () => import('../periodic-table/periodic-table.module').then(m => m.PeriodicTableModule)
  },
  { 
    path: '**',
    loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

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
