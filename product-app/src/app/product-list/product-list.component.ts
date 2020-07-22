import { Product } from './../models/product'
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  inputSearch: string;

  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('y8.com', '01', 'Name 001 a', 11200.00, false, 4.2);
    const p2 = new Product('y9.com', '02', 'Name 002 b', 1150.5045, true, 3.2);
    const p3 = new Product('y10.com', '03', 'Name 003 a', 144.42, false, 4.8);
    this.productList.push(p1, p2, p3);
  }

}
