import { Component, OnInit } from '@angular/core';

import { Product } from '../app/product';
import { ProductService } from '../app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(): void {
    this.productService.getProducts()
    .subscribe(product => this.products = product);
  }
}