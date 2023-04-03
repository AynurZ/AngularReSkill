import { Action }  from "@ngrx/store"
import { BasketProduct } from "src/app/basketProduct"
import { Update } from "@ngrx/entity"
import { Product } from "src/app/product"

export enum BasketProductActionTypes{
    LOAD_BASKET_PRODUCTS="[BasketProduct] Load Basket Products",
    LOAD_BASKET_PRODUCTS_SUCCESS = "[BasketProduct] Load Basket Products Success",
    LOAD_BASKET_PRODUCTS_FAIL="[BasketProduct] Load Basket Products Fail",
    LOAD_TOTAL_BASKET_PRODUCT="[BasketProduct] Load Total Basket Product",
    LOAD_TOTAL_BASKET_PRODUCT_SUCCESS = "[BasketProduct] Load Total Basket Product Success",
    LOAD_TOTAL_BASKET_PRODUCT_FAIL="[BasketProduct] Load Total Basket Product Fail",
    ADD_BASKET_PRODUCT="[BasketProduct] Add Basket Product",
    ADD_BASKET_PRODUCT_SUCCESS = "[BasketProduct] Add Basket Product Success",
    ADD_BASKET_PRODUCT_FAIL="[BasketProduct] Add Basket Product Fail",
    DELETE_BASKET_PRODUCT="[BasketProduct] Delete Basket Product",
    DELETE_BASKET_PRODUCT_SUCCESS = "[BasketProduct] Delete Basket Product Success",
    DELETE_BASKET_PRODUCT_FAIL="[BasketProduct] Delete Basket Product Fail"
}

export class LoadBasketProducts implements Action{
    readonly type = BasketProductActionTypes.LOAD_BASKET_PRODUCTS
}
export class LoadBasketProductsSuccess implements Action{
    readonly type = BasketProductActionTypes.LOAD_BASKET_PRODUCTS_SUCCESS
    constructor (public payload: BasketProduct[]){}
}
export class LoadBasketProductsFail implements Action{
    readonly type = BasketProductActionTypes.LOAD_BASKET_PRODUCTS_FAIL
    constructor (public payload: string){}
}

export class LoadTotalBasketProducts implements Action{
    readonly type = BasketProductActionTypes.LOAD_TOTAL_BASKET_PRODUCT
}
export class LoadTotalBasketProductsSuccess implements Action{
    readonly type = BasketProductActionTypes.LOAD_TOTAL_BASKET_PRODUCT_SUCCESS
    constructor (public payload: number){}
}
export class LoadTotalBasketProductsFail implements Action{
    readonly type = BasketProductActionTypes.LOAD_TOTAL_BASKET_PRODUCT_FAIL
    constructor (public payload: string){}
}

export class AddBasketProduct implements Action{
    readonly type = BasketProductActionTypes.ADD_BASKET_PRODUCT
    constructor (public payload: Product){}
}
export class AddBasketProductSuccess implements Action{
    readonly type = BasketProductActionTypes.ADD_BASKET_PRODUCT_SUCCESS
    constructor (public payload: Product){}
}
export class AddBasketProductFail implements Action{
    readonly type = BasketProductActionTypes.ADD_BASKET_PRODUCT_FAIL
    constructor (public payload: string){}
}

export class DeleteBasketProduct implements Action{
    readonly type = BasketProductActionTypes.DELETE_BASKET_PRODUCT
    constructor (public payload: number){}
}
export class DeleteBasketProductSuccess implements Action{
    readonly type = BasketProductActionTypes.DELETE_BASKET_PRODUCT_SUCCESS
    constructor (public payload: number){}
}
export class DeleteBasketProductFail implements Action{
    readonly type = BasketProductActionTypes.DELETE_BASKET_PRODUCT_FAIL
    constructor (public payload: string){}
}




export type Actions = 
| LoadBasketProducts  
| LoadBasketProductsSuccess 
| LoadBasketProductsFail 
| AddBasketProduct  
| AddBasketProductSuccess  
| AddBasketProductFail 
| DeleteBasketProduct  
| DeleteBasketProductSuccess  
| DeleteBasketProductFail
| LoadTotalBasketProducts
| LoadTotalBasketProductsSuccess
| LoadTotalBasketProductsFail;