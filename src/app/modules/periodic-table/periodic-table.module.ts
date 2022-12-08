import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from '../../forms/periodic-table/periodic-table.component';
import { DataGridComponent } from 'src/app/components/data-grid/data-grid.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PeriodicTableComponent,
    DataGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PeriodicTableComponent
  ]
})
export class PeriodicTableModule { }
 