import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketProduct } from '../app/basketProduct';
import { CartService } from '../../service/cartservice';
import { Store, select } from '@ngrx/store';
import * as basketProductActions from "../state/basketproduct.action"
import * as fromBasketProduct from "../state/basketproduct.reducer"


@Component({
  selector: 'app-basketproducts',
  templateUrl: './basketproductlist.component.html',
  styleUrls: ['./basketproductlist.component.css']
})
export class BasketProductListComponent implements OnInit {
  basketproduct$!: Observable<BasketProduct[]>;;
  public items$!: Observable<BasketProduct[]>;
  public error$: Observable<String> | undefined;
  constructor
  (
    public cartService: CartService,
    private store: Store<fromBasketProduct.AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(new basketProductActions.LoadBasketProducts())
    this.items$=this.store.pipe(select(fromBasketProduct.getBasketProducts))
    this.error$ = this.store.pipe(select(fromBasketProduct.getError));
    console.log('error - ',this.error$)
  }
  
  deleteBasketProduct(basketProduct: BasketProduct) {
    if (confirm("Are You Sure You want to Delete the Product?")) {
      this.cartService.removeFromBasket$(basketProduct.id);
    }
  }
  
 
}