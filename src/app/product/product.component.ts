import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  costly: boolean = false;
  productData!: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onClickNext() {
    this.router.navigate(['product', '3']),{
      queryParams:{
        'costly':true
      }
    };
  }

  ngOnInit() {
    let id = '';

    this.route.queryParamMap.subscribe({
      next: (params) => {
        if (params.get('costly')) {
          this.costly = true;
        }
      },
    });

    this.route.params.subscribe({
      next: (data) => {
        id = data['id'];
        this.productService.getSingleData(id).subscribe({
          next: (data: any) => {
            this.productData = data;
          },
        });
      },
    });
    console.log(id);
  }

  // const id = this.route.snapshot.params['id'];

  // this.productService.getSingleData(id).
  // subscribe({
  //   next: (data:any) =>{
  //     this.productData = data;
  //   }
  // })
}
