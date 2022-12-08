import { Component } from '@angular/core';
import { CardItem } from './interfaces/CardItem.interface';
import { PeriodicElement } from './interfaces/PeriodicElement.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // cardItems: CardItem[] = [
  //   {title: 'Maia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gFvCcCD9UWyCancNj49D4jCCUCjoIx2XJZnReyu33w&s', likeCount: 0 },
  //   {title: 'Dylan', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', likeCount: 0},
  //   {title: 'Minoru', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx4ylDY1QpPqnc0rJX4XgH0Ve2ecEnE44h_coFoEsi2U08FkzW-XF3PtLGC_H3HoCOdA&usqp=CAU', likeCount: 0}
  // ]; 

  // columnHeader = {
  //   id: 'ID',
  //   element: 'Element',
  //   weight: 'Weight',
  //   symbol: 'Symbol,'
  // }; 

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

  // addCard(card: CardItem)
  // {
  //   this.cardItems.push(card);
  // }

  // removeCard(indexItem: number)
  // {
  //   this.cardItems = this.cardItems.filter((val, index) => index != indexItem);
  // }

}
