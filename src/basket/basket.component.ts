import { Component, OnInit } from '@angular/core';
import { Product } from '../app/product';
import { ProductService } from '../app/product.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketproducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproductBasket();
  }

  getproductBasket(): void {
    this.productService.getProducts()
    .subscribe(product => this.basketproducts = product);
  }
}