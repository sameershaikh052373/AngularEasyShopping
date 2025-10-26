import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product.model';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): Product[] {
    const typed : string = args[0];

    const filteredArr = value.filter(product =>{
      return product.name.toLowerCase().includes(typed.toLowerCase())
    });

    return filteredArr;
  }

}
