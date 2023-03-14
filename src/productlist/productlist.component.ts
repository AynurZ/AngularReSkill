import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/product';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-products',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductService) { }

  public items$!: Observable<Product[]>;
  
  ngOnInit(): void {
    this.items$ = this.productService.GetItems$();
  }
}