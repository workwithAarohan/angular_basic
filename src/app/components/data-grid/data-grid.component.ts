import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IDataGrid } from 'src/app/interfaces/IDataGrid.interface';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement.interface';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  // @Input() tableData: PeriodicElement[] = [];
  @Input() tableData: any[] = [];
  @Input() columnHeader: {[key: string]: string | number;} = {};
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>; 

  constructor(private readonly router: Router, 
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tableData']?.currentValue?.length !== changes['tableData']?.previousValue?.length) {
      this.dataSource = new MatTableDataSource(this.tableData);
    }
  }

  goToItemDetails(data: IDataGrid): void {
    this.router.navigate(['item-details', data.id], {state: {data}, relativeTo: this.route}).then();
  }


}
