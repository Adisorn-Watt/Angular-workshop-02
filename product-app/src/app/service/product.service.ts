import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*getAllProduct(): Product[] {
    const productList: Product[] = [];
    const p1 = new Product('y8.com', 'u01', 'Name 001 a', 2504.44, false, 2.3);
    const p2 = new Product('y9.com', 'u02', 'Name 002 b', 1150.502, true, 3.2);
    const p3 = new Product('y10.com', 'u03', 'Name 003 a', 144.42, false, 4.8);
    productList.push(p1, p2, p3);
    return productList;
  }*/

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://165.22.255.58:3000/products'
    );
  }

}
