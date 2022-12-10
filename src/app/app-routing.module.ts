import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { CardWrapperComponent } from 'src/app/forms/card-wrapper/card-wrapper.component';
// import { PeriodicTableComponent } from 'src/app/forms/periodic-table/periodic-table.component';
// import { HomeComponent } from 'src/app/forms/home/home.component';
// import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./forms/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cards', 
    loadChildren: () => import('./forms/card-wrapper/card-wrapper.module').then(m => m.CardWrapperModule)
  },
  {
    path: 'periodic-table', 
    loadChildren: () => import('./forms/periodic-table/periodic-table.module').then(m => m.PeriodicTableModule),
    canActivate: [AuthGuard]
  },
  { 
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
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
