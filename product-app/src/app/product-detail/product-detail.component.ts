import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { from } from 'rxjs';

type Products = Product[];
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  pageName = 'ProductDetail';

  constructor(private route: ActivatedRoute, public service: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.service.getAllProduct().subscribe((products) => {
        this.product = products.filter((p) => p.code === params.get('id'))[0];
      });
    });
  }

  /*ngOnInit(): void {
    const prodId: string = this.route.snapshot.paramMap.get('code');
    this.service.getSelectedProduct(prodId).subscribe((p) => {
      this.product = p;
    });
  }*/

  onRatingClicked(message: string): void {
    alert(message);
  }


}
