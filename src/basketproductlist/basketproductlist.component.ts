import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketProduct } from '../app/basketProduct';
import { Product } from '../app/product';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-basketproducts',
  templateUrl: './basketproductlist.component.html',
  styleUrls: ['./basketproductlist.component.css']
})
export class BasketProductListComponent implements OnInit {
  constructor(public cartService: CartService) { }

  
  public items$!: Observable<BasketProduct[]>;
  
  
  ngOnInit(): void {
    this.items$ = this.cartService.GetItems$();
  }
  
 
}