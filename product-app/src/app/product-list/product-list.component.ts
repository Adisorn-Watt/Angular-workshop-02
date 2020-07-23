import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'
import { ProductService } from '../service/product.service'
import { ProductDetailComponent } from '../product-detail/product-detail.component'
import { from } from 'rxjs';

declare var jQuery: any;
type Products = Product[];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public service: ProductService) { }
  productList: Products = [];
  productSelected: Product;
  inputSearch: string = "";

  ngOnInit(): void {
    //this.productList = this.service.getAllProduct();

    /*const p1 = new Product('y8.com', '01', 'Name 001 a', 11200.00, false, 4.2);
    const p2 = new Product('y9.com', '02', 'Name 002 b', 1150.5045, true, 3.2);
    const p3 = new Product('y10.com', '03', 'Name 003 a', 144.42, false, 4.8);
    this.productList.push(p1, p2, p3);*/
    // actually They shouldn't be here
    // should use service
    // เรียก service --> API --> แสดงผล
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.productList = products);
    });
  }

  onRatingClicked(message: string): void {
    alert(message);
  }

  open(product: Product): void {
    //for checking if able to click or not
    console.log('can be clicked'); //worked
    this.productSelected = product;
    //this.service.getSelectedProduct(product);
  }

}
