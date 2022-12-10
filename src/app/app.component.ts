import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  observable: Observable<number>;
  
  subscriber: Subscription;

  secondSub: Subscription;
  
  ngOnInit(): void {
    this.observable = new Observable(observer => {
      observer.next(101);
      setTimeout(() => observer.next(5), 5000);
      observer.next(1);
      setTimeout(() => observer.next(2), 1000);
      setTimeout(() => observer.next(3), 2000);
      setTimeout(() => {
        observer.next(66);
        observer.complete();
      }, 7000);
      setTimeout(() => observer.error('An error occurred!!'), 6000)
    });
    
    this.subscriber = this.observable.pipe(
      map(v => v * 2),
      filter(v => v < 100)
      ).subscribe({
      next(val) {
        console.log(`next val is ${val}`);
      },
      error(err) {
        console.log(`something went wrong: ${err}`);
      },
      complete() {
        console.log('completed');
      }
    });

    setTimeout(() => {
      this.secondSub = this.observable.pipe().subscribe({
        next(val) {
          console.log(`from second sub next val is ${val}`);
        },
        error(err) {
          console.log(`from second sub something wen wronf: ${err}`);
        },
        complete() {
          console.log('from second sub completed');
        }
      });
    }, 2000);
  }
  
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
    this.secondSub.unsubscribe();
  }


































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
