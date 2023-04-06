import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/product';
import { ProductService } from '../../service/product.service';
import { Store, select } from '@ngrx/store';
import { BasketProduct } from '../app/basketProduct';
import * as basketProductActions from "../state/basketproduct.action"
import * as fromBasketProduct from "../state/basketproduct.reducer"


@Component({
  selector: 'app-products',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    public productService: ProductService,
    private store: Store<fromBasketProduct.AppState>) { }

  public items$!: Observable<Product[]>;
  
  ngOnInit(): void {
    this.items$ = this.productService.GetItems$();
  }
  

}