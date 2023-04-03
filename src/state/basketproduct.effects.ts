import { Injectable } from "@angular/core";
import { Actions, createEffect , EffectSources, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map,mergeMap,catchError} from "rxjs/operators"
import * as basketProductActions from "./basketproduct.action"
import { BasketProduct } from "src/app/basketProduct";
import { CartService } from "service/cartservice";
import { Product } from "src/app/product";

@Injectable()
export class BasketProductEffect {
    constructor(
        private actions$: Actions,
        private cartService: CartService
    ){}

/*
    loadBasketProducts$: Observable<Action> = 
    createEffect(()=>{
        return this.actions$.pipe(
        ofType<basketProductActions.LoadBasketProducts>(
            basketProductActions.BasketProductActionTypes.LOAD_BASKET_PRODUCTS
        ),
        mergeMap((actions: basketProductActions.LoadBasketProducts)=>
            this.cartService.GetItems$().pipe(
                map(
                    (basketProducts: BasketProduct[])=>
                        new basketProductActions.LoadBasketProductsSuccess(basketProducts)
                ),
                catchError(err=>of(new basketProductActions.LoadBasketProductsFail(err)))
                )
            )
        )
        }
    );
*/
}