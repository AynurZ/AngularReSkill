import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cartservice';
import * as fromBasketProduct from "../state/basketproduct.reducer"

@Component({
  selector: 'app-baskettotal',
  templateUrl: './baskettotal.component.html',
  styleUrls: ['./baskettotal.component.css']
})
export class BaskettotalComponent {
  total$!: Observable<number>;
  
  constructor
  (
    private readonly cartService: CartService,
    private store:Store<any>,
    
  ) {
    this.total$ = this.store.pipe(select(fromBasketProduct.getBasketProductsTotal));
    console.log("total - ", this.total$)
  }

//public total$: Observable<number> = this.cartService.GetTotal$();
ngOnInit(): void {
    console.log('product total ',this.total$);
    this.total$ = this.store.pipe(select(fromBasketProduct.getBasketProductsTotal));
  } 
}
