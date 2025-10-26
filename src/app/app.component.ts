import { Component } from '@angular/core';
import { Product } from './product.model';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Eshop';
  num = 0;

  constructor(){
    const obs$ = of(1, 2, 3, 4, 5); // this is alternate for observable but no error handling

    // const obs$ = new Observable(observer => { old way of observable
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.complete();
    // });

    //   obs$.subscribe((data) => { this is deprecated
    //     console.log(data);
    //   },
    // (error) =>{
    //   console.warn(error)
    // },()=>{
    //   console.log("Completed");
    // })

    //by using pipes
    const newObs$ = obs$.pipe(
      map(num => {
        return num **2;
      }),
      filter((num) => {
        return num % 2===0;
      }),
    );

    newObs$.subscribe({
      next: (num) => {
        console.log(num);
      }
    })

    // /this is after derprecation successor
    // obs$.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.warn(error);
    //   },
    //   complete: () => {
    //     console.log('');
    //   },
    // });
  }

  

  collect = '';

  onClickMe() {
    console.log('hello i am a button');
    this.num += 1;
  }

  onClickDecrease() {
    this.num -= 1;
  }

  // onInput(event:any){
  //   this.collect = this.collect + event.data;
  //   console.log(this.collect);

  // }


  prods: Product[] = [
    {
      name: 'Iphone',
      description: 'This is a very costly phone',
      price: 90000,
      img: '../../assets/images/iphone.jpg',
    },
    {
      name: 'Samsung',
      description: 'This is a very costly phone',
      price: 80000,
      img: '../../assets/images/samsung.jpg',
    },
    {
      name: 'Oppo',
      description: 'This is a feasible phone',
      price: 20000,
      img: '../../assets/images/samsung_phone.webp',
    },
    {
      name: 'Poco',
      description: 'This is a feasible phone',
      price: 35000,
      img: '../../assets/images/samsung_phone.webp',
    },
  ];

  addProduct(event: Product) {
    console.log(event);

    this.prods.push(event);
  }
}

