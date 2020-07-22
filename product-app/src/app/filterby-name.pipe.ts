import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filterbyName'
})
export class FilterbyNamePipe implements PipeTransform {

  transform(productList: Product[], name: string): Product[] {
    return productList.filter((p) => p.name.indexOf(name) != -1);
  }

}
