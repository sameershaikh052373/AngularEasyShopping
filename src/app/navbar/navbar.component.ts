import { Component, effect } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currDate = new Date();

  constructor(private productService: ProductService){

effect(() =>{
  this.count = this.productService.cardCountSubject();
})
  }
  count !: number;
  ngOnInit(){

  }
}
