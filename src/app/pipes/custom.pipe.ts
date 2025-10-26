import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product.model';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): any {

    const filteredProducts = value.filter((product : Product) => {
      // return product.price < 50000
    // return product.price < args[0]
    

    })
    return filteredProducts;
    
  }

}
