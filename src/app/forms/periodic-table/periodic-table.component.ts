import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDataGrid } from 'src/app/interfaces/IDataGrid.interface';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement.interface';
import { PeriodicTableService } from 'src/app/services/periodic-table.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  constructor(private readonly http: HttpClient, 
    private readonly periodicTableService: PeriodicTableService) {

  }

  columnHeader = {
      id: 'ID',
      element: 'Element',
      weight: 'Weight',
      symbol: 'Symbol'
    };
  
  periodicElements: IDataGrid[] = [];


  ngOnInit(): void {
    this.http.get<IDataGrid[]>('http://localhost:3000/periodicElement').subscribe(elements => {
      this.periodicTableService.periodicElements$$$.next(elements);
    });

    this.periodicTableService.periodicElements$$$.subscribe(elements => this.periodicElements = [].concat(elements));
  }

  addElement(): void {
    const el: IDataGrid = {id: 11, element: 'Sodium', weight: 22.9898, symbol: 'Na'};
    this.periodicTableService.addElement(el);
  }

  // tableData: PeriodicElement[] = [
  //   { id: 1, element: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { id: 2, element: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { id: 3, element: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { id: 4, element: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { id: 5, element: 'Boron', weight: 10.811, symbol: 'B' },
  //   { id: 6, element: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { id: 7, element: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { id: 8, element: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { id: 9, element: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { id: 10, element: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];
}
