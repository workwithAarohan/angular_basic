import { Component } from '@angular/core';

@Component({
  selector: 'app-attrs',
  templateUrl: './attrs.component.html',
  styleUrls: ['./attrs.component.css']
})
export class AttrsComponent {
  foods: string[] = [];

  constructor() {}

  addFood(foodItem: string) {
    this.foods.push(foodItem);
  } 
}
