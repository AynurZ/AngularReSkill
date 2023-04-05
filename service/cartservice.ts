import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../src/app/product';
import { BasketProduct } from '../src/app/basketProduct'
import { Store } from '@ngrx/store';
import { BasketProductState } from '../src/state/basketproduct.reducer'
import { AddBasketProduct, LoadBasketProductsSuccess, DeleteBasketProduct } from '../src/state/basketproduct.action'



@Injectable({ providedIn: 'root' })
export class CartService {
  http: any;
  constructor(
    private store$: Store<BasketProductState>){

  }

  basketProducts: Product[]=[];
  basketProducts1: BasketProduct[]=[];
  public totalProductsInBasket: number = 0;
  public productsInTheBasket$ = new BehaviorSubject<number>(0)

  public GetItems$() : Observable<BasketProduct[]>{
    const basketProductArray: Product[] = Array.from(this.basketProducts);
    let productsInBasket: BasketProduct[] = [];
    
    basketProductArray.forEach((product) =>{
      const basketProduct: BasketProduct = {
        title: product.title,
        id: product.id,
        price: product.price,
        description: product.title,
        category: product.title,
        image: product.title,
        rating: product.title,
        count:1
      }
      productsInBasket.push(basketProduct);
      
    });
    console.log("value- ",productsInBasket);
    return of (productsInBasket);
    }

    public AddItem$(product: Product){
      this.store$.dispatch(new AddBasketProduct(product));
    }

    removeFromBasket$(id: number){
      this.store$.dispatch(new DeleteBasketProduct(id));
      console.log('value deleted - ', id)
      console.log('value now - ', this.basketProducts)
      return this.basketProducts1;
    }

    public GetTotal$() : Observable<number>{
      let Total: any;
      Total=this.productsInTheBasket$
      return (Total);
    }


}