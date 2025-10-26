import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService,private router:Router) {
    // console.log(productService.prods);
    // this.products = productService.prods

    
  }

  // @Input() products : any ;

  ngOnInit() {
    this.updateUi();
    this.productService.productSubject.subscribe
    ({
      next: ()=>{
        this.updateUi();
      }
    })
    // this.productService.getData(); //async
    // setTimeout(()=>{
    //   this.products = this.productService.products;
    // },3000);
    // console.log(this.products);

  }

  private updateUi(){
    this.productService.getData().subscribe({
      next:(products) =>{
        this.products = products;
      }
    })
  }

  onDeleteProduct(id : string){
    this.productService.deleteData(id).subscribe({
        next: () => {
          this.updateUi();
        }
    })
  }

  onAddToCart(){
    this.productService.cardCountSubject.update(v => v+1);
  }

  onClickGo(product_id:string){
    this.router.navigate(['product',product_id]);
  }

  name = '';

  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  tablenum = 3;

  num = 0;
  numbers: any = [];
  Clickme() {
    this.numbers.push(++this.num);
  }
}
