import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CardItem} from '../../interfaces/CardItem.interface';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  // String Interpolation
  // title: string = 'Angular';

  // cards: CardItem[] = [
  //   {title: 'Maia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gFvCcCD9UWyCancNj49D4jCCUCjoIx2XJZnReyu33w&s', likeCount: 0 },
  //   {title: 'Dylan', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', likeCount: 0},
  //   {title: 'Minoru', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx4ylDY1QpPqnc0rJX4XgH0Ve2ecEnE44h_coFoEsi2U08FkzW-XF3PtLGC_H3HoCOdA&usqp=CAU', likeCount: 0}
  // ];

  // Receiving the value of cards from its parent component i.e. AppComponent
  @Input() cards: CardItem[] = [];

  // To notify the parent about the change
  @Output() cardEvent$ = new EventEmitter<CardItem>();

  @Output() caredDelete$ = new EventEmitter<number>();

  // Property binding
  avatar:string = "https://angular.io/assets/images/logos/angular/angular.png";
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;

  // String Interpolation
  // likeCount:number = 0;

  // Class Binding
  divClass: string = 'card-container';
  // Style Binding
  containerStyle: string = 'padding: 1em;';
  size:string = '17px';
  margin: string = "10px 10px -10px 10px";

  // Event Binding
  onLike(cardTitle: string): void {
    const index = this.cards.findIndex(x => x.title == cardTitle);
    this.cards[index].likeCount++;
  }

  onAddCard(cardTitle: string, cardImage: string): void {
    var cardItem: CardItem = {title: cardTitle, image: cardImage, likeCount: 0};
    this.cardEvent$.emit(cardItem);
  }

  deleteItem(index: number)
  {
    this.caredDelete$.emit(index);
  }
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit(): void {
      
  }

}
