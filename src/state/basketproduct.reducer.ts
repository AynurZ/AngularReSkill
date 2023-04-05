import * as basketProductActions from "./basketproduct.action"
import { BasketProduct } from "src/app/basketProduct"
import * as fromRoot from "./app-state"
import { createFeatureSelector, createSelector} from "@ngrx/store"
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
            let currentBasketProduct: BasketProduct | undefined = state.entities[action.payload.id];
            if (currentBasketProduct !== undefined) {
                const updateBasketProduct: BasketProduct = { 
                    id: currentBasketProduct.id,
                    category:currentBasketProduct.category,  
                    price: currentBasketProduct.price, 
                    count:  currentBasketProduct.count+ 1 ,
                    title:currentBasketProduct.title,
                    description:currentBasketProduct.description,
                    image:currentBasketProduct.image,
                    rating:currentBasketProduct.rating 
                }
                return basketProductAdapter.updateOne({ id: currentBasketProduct.id!, changes: updateBasketProduct }, state);
            }
            else{
                let addBasketProduct: BasketProduct = {
                    id: action.payload.id,
                    category:action.payload.category,
                    price:action.payload.price,
                    count: 1,
                    title:action.payload.title,
                    rating:action.payload.rating,
                    description:action.payload.description,
                    image:action.payload.image
                
            }
            return basketProductAdapter.addOne(addBasketProduct, state)
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
