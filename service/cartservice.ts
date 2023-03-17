import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../src/app/product';
import { BasketProduct } from '../src/app/basketProduct'



@Injectable({ providedIn: 'root' })
export class CartService {

  basketProducts: Product[]=[];
  public totalProductsInBasket: number = 0;
  public productsInTheBasket$ = new BehaviorSubject<number>(0)


  public GetItems$() : Observable<BasketProduct[]>{
    const basketProductArray: Product[] = Array.from(this.basketProducts);
    let productsInBasket: BasketProduct[] = [];
    
    basketProductArray.forEach(function(product){
      const basketProduct: BasketProduct = {
        title: product.title,
        id: product.id,
        price: product.price,
        description: product.title,
        category: product.title,
        image: product.title,
        rating: product.title
      }
      productsInBasket.push(basketProduct);
      
    });

    return of (productsInBasket);
    }

    public AddItem(product: Product){
      this.totalProductsInBasket ++;
      this.productsInTheBasket$.next(this.totalProductsInBasket);
      this.basketProducts.push(product)
    }

    public GetTotal$(){
      return (this.productsInTheBasket$);
    }


}