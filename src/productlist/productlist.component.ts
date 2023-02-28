import { Component, OnInit } from '@angular/core';

import { Product } from '../app/product';
import { ProductService } from '../app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(): void {
    this.productService.getProducts()
    .subscribe(product => this.product = product);
  }
}