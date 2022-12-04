import { Component } from '@angular/core';

export interface PeriodicElement {
  username: string;
  address: string;
  age: number;
}

const USER_DATA: PeriodicElement[] = [
  { username: 'aarohan_1', address: "Imadol", age: 23},
  { username: 'aarohan_2', address: "Imadol", age: 15},
  { username: 'aarohan_3', address: "Imadol", age: 34},
  { username: 'aarohan_4', address: "Imadol", age: 18},
  { username: 'aarohan_5', address: "Imadol", age: 29},
  { username: 'aarohan_6', address: "Imadol", age: 41},
  { username: 'aarohan_7', address: "Imadol", age: 20},
  { username: 'aarohan_8', address: "Imadol", age: 10},
  { username: 'aarohan_9', address: "Imadol", age: 72},
  { username: 'aarohan_10', address: "Imadol", age: 54},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  
  dataSource = USER_DATA;
}
