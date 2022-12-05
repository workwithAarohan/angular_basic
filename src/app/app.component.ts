import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = ['Java', 'Angular', 'SSIS'];

  reset = "";

  formClass = "form-control";
  formStyle = {'width': '400px'};

  constructor() {}

  addItem(foodItem: string)
  {
    this.items.push(foodItem);
    this.reset="";
  }

  removeItem(indexItem: number)
  {
    this.items = this.items.filter((val, index) => index != indexItem);
  }
}
