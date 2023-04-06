import * as basketProductActions from "./basketproduct.action"
import { BasketProduct } from "src/app/basketProduct"
import * as fromRoot from "./app-state"
import { ActionReducer, INIT, createFeatureSelector, createSelector} from "@ngrx/store"
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"

  
export interface BasketProductState extends EntityState<BasketProduct>{
    selectedBasketProduct: number | null,
    loading: boolean,
    loaded: boolean,
    error: string 
}

export interface AppState extends fromRoot.AppState{
    basketproduct: BasketProductState
}

export const defaultBasketProduct: BasketProductState = {
    ids:[],
    entities:{},
    selectedBasketProduct: null,
    loaded: false,
    loading: false,
    error: ""
}

export const basketProductAdapter: EntityAdapter<BasketProduct> 
= createEntityAdapter<BasketProduct>();

export const initialState = basketProductAdapter.getInitialState(defaultBasketProduct)

export function basketproductReducer(
    state=initialState,
    action:basketProductActions.Actions
):BasketProductState{
    switch (action.type) {
        case basketProductActions.BasketProductActionTypes.LOAD_BASKET_PRODUCTS_SUCCESS: {
          return basketProductAdapter.setAll(action.payload, {
            ...state,
            loading: false,
            loaded: true
          });
        }
        case basketProductActions.BasketProductActionTypes.ADD_BASKET_PRODUCT: {
            let currentBasketProductToAdd: BasketProduct | undefined = state.entities[action.payload.id];
            if (currentBasketProductToAdd !== undefined) {
                const updateBasketProduct: BasketProduct = { 
                    id: currentBasketProductToAdd.id,
                    category:currentBasketProductToAdd.category,  
                    price: currentBasketProductToAdd.price, 
                    count:  currentBasketProductToAdd.count+ 1 ,
                    title:currentBasketProductToAdd.title,
                    description:currentBasketProductToAdd.description,
                    image:currentBasketProductToAdd.image,
                    rating:currentBasketProductToAdd.rating 
                }
                return basketProductAdapter.updateOne({ id: currentBasketProductToAdd.id!, changes: updateBasketProduct }, state);
            }
            else{
                let addNewBasketProduct: BasketProduct = {
                    id: action.payload.id,
                    category:action.payload.category,
                    price:action.payload.price,
                    count: 1,
                    title:action.payload.title,
                    rating:action.payload.rating,
                    description:action.payload.description,
                    image:action.payload.image
                
            }
            return basketProductAdapter.addOne(addNewBasketProduct, state)
          }}
        case basketProductActions.BasketProductActionTypes.ADD_BASKET_PRODUCT_FAIL: {
            return {
              ...state,
              entities: {},
              loading: false,
              loaded: false,
              error: action.payload
            };
          }
        case basketProductActions.BasketProductActionTypes.LOAD_BASKET_PRODUCTS: {
            return state
        }
        case basketProductActions.BasketProductActionTypes.DELETE_BASKET_PRODUCT: {
            let currentBasketProductToDelete: BasketProduct | undefined = state.entities[action.payload];
            if (currentBasketProductToDelete!.count>1) {
                const updateBasketProduct: BasketProduct = { 
                    id: currentBasketProductToDelete!.id,
                    category:currentBasketProductToDelete!.category,  
                    price: currentBasketProductToDelete!.price, 
                    count:  currentBasketProductToDelete!.count -1 ,
                    title:currentBasketProductToDelete!.title,
                    description:currentBasketProductToDelete!.description,
                    image:currentBasketProductToDelete!.image,
                    rating:currentBasketProductToDelete!.rating 
                }
                return basketProductAdapter.updateOne({ id: currentBasketProductToDelete!.id!, changes: updateBasketProduct }, state);
            }
            return basketProductAdapter.removeOne(action.payload, state)
        }
        default:{
            return state;
        }
    }
}

const getBasketProductFeatureState= createFeatureSelector<BasketProductState>(
    "basketproduct"
)

export const getBasketProducts = createSelector(
    getBasketProductFeatureState,
    basketProductAdapter.getSelectors().selectAll
)
export const getBasketProductsTotal = createSelector(
    getBasketProductFeatureState,
    (state: BasketProductState) => {
        return state !== undefined? Object.values(state.entities).reduce((sum, basketProduct) => sum + Number(basketProduct?.count), 0): 0;
    }
)
export const getBasketProductsLoading = createSelector(
    getBasketProductFeatureState,
    (state : BasketProductState)=>state.loading
)
export const getBasketProductsLoaded = createSelector(
    getBasketProductFeatureState,
    (state : BasketProductState)=>state.loaded
)
export const getError = createSelector(
    getBasketProductFeatureState,
    (state : BasketProductState)=>state.error
)
