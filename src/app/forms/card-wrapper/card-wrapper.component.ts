import { Component } from '@angular/core';
import { CardItem } from 'src/app/interfaces/CardItem.interface';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent {
  cardItems: CardItem[] = [
    {id: 1, title: 'Maia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gFvCcCD9UWyCancNj49D4jCCUCjoIx2XJZnReyu33w&s', likeCount: 0 },
    {id: 2, title: 'Dylan', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', likeCount: 0},
    {id: 3, title: 'Minoru', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx4ylDY1QpPqnc0rJX4XgH0Ve2ecEnE44h_coFoEsi2U08FkzW-XF3PtLGC_H3HoCOdA&usqp=CAU', likeCount: 0}
  ];

  addCard(card: CardItem)
  {
    this.cardItems.push(card);
  }

  removeCard(indexItem: number)
  {
    this.cardItems = this.cardItems.filter((val, index) => index != indexItem);
  }
}
