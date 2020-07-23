import { Injectable } from '@angular/core';
import { Product, exampleProd } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

type Products = Product[];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*p1 = new Product('y8.com', 'u01', 'Name 001 a', 2504.44, false, 2.3);
  p2 = new Product('y9.com', 'u02', 'Name 002 b', 1150.502, true, 3.2);
  p3 = new Product('y10.com', 'u03', 'Name 003 a', 144.42, false, 4.8);
  constructor() { }
  getAllProduct(): Observable<Product[]> {
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
    return of([this.p1, this.p2, this.p3]);
  }

  getSelectedProduct(code: string): Observable<Product> {
    return of([this.p1, this.p2, this.p3].filter((p) => p.code === code)[0]);
  }*/

  //public product: Product;

  public product: Product;
  constructor(private http: HttpClient) { }
  /* dummy data */
  /*getAllProduct(): ProductList {
    const productList: ProductList = [];
    const p1 = new Product('y8.com', 'u01', 'Name 001 a', 2504.44, false, 2.3);
    const p2 = new Product('y9.com', 'u02', 'Name 002 b', 1150.502, true, 3.2);
    const p3 = new Product('y10.com', 'u03', 'Name 003 a', 144.42, false, 4.8);
    productList.push(p1, p2, p3);
    return productList;
  }*/

  /* Simulate real data */
  getAllProduct(): Observable<Products> {
    const p1 = new Product('y8.com', 'u01', 'Name 001 a', 2504.44, false, 2.3);
    const p2 = new Product('y9.com', 'u02', 'Name 002 b', 1150, true, 3.2);
    const p3 = new Product('y10.com', 'u03', 'Name 003 a', 144.42, false, 4.8);
    return of([p1, p2, p3]);
  }

  /* Real data */
  /*getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://165.22.255.58:3000/products'
    )
  }*/

  /*getSelectedProduct(product: Product) {
    this.product = product;
}*/

}
