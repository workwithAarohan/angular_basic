import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardItem } from 'src/app/interfaces/CardItem.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  id: number;
  item: CardItem;


  constructor(private readonly route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if(id) {
    //   this.id = +id;
    // }
    this.item = history.state?.item;
  }


}
