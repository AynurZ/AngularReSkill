import { Component, OnInit } from '@angular/core';
import { Product } from '../app/product';
import { ProductBasketService } from '../app/productBasket.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketproducts: Product[] = [];

  constructor(private productService: ProductBasketService) { }

  ngOnInit(): void {
    this.getproductBasket();
  }

  getproductBasket(): void {
    this.productService.getProducts()
    .subscribe(product => this.basketproducts = product);
  }
}