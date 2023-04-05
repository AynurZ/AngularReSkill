import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as Basket from './basketproduct.reducer';
import { RootState } from '../state/root.state';
import { hydrationMetaReducer } from './hydration.reducer';


export const reducers: ActionReducerMap<RootState> = {
    basketProducts: Basket.basketProductAdapter,
  };

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]