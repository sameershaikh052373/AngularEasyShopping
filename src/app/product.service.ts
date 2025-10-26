import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  isLogin = false;
  products: Product[] = [];


  productSubject = new Subject();
  cardCountSubject = signal(0);
  // prods: Product[] = [
  //     {
  //       name: 'Iphone',
  //       description: 'This is a very costly phone',
  //       price: 90000,
  //       img: '../../assets/images/iphone.jpg',
  //     },
  //     {
  //       name: 'Samsung',
  //       description: 'This is a very costly phone',
  //       price: 80000,
  //       img: '../../assets/images/samsung.jpg',
  //     },
  //     {
  //       name: 'Oppo',
  //       description: 'This is a feasible phone',
  //       price: 20000,
  //       img: '../../assets/images/samsung_phone.webp',
  //     },
  //     {
  //       name: 'Poco',
  //       description: 'This is a feasible phone',
  //       price: 35000,
  //       img: '../../assets/images/samsung_phone.webp',
  //     },
  //   ];

  constructor(private http: HttpClient) {}

  API_URL = environment.apiUrl + 'products/';

  getData() {
    return this.http.get(this.API_URL);
    // this.http.get(this.API_URL).subscribe({
    //   next: (products: any) => {
    //     this.products = products;
    //     console.log(products);
    //   }
    // })
  }

  postData(productData: Product) {
    return this.http.post(this.API_URL, productData);
  }

  deleteData(id: string){
    return this.http.delete(
       this.API_URL+ id
    );
  }

  getSingleData(id:string){
    return this.http.get(this.API_URL + id);
  }

  
}
