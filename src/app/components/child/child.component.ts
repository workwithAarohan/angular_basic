import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('items') itemArr!: string[];
  @Output('deleteItem') itemDelete = new EventEmitter<number>();

  styleOne = {'margin' : '9px', 'border': 'none'};

  constructor() {}

  deleteItem(index: number)
  {
    this.itemDelete.emit(index);
  }

}
