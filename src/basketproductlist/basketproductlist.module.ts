import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketProductListRoutingModule } from './basketproductlist-routing.module';
import {StoreModule} from "@ngrx/store"
import { EffectsModule, Actions } from '@ngrx/effects';

import { basketproductReducer } from 'src/state/basketproduct.reducer';
import { BasketProductEffect } from '../state/basketproduct.effects';

@NgModule({
  imports: [
    CommonModule,
    BasketProductListRoutingModule,
    StoreModule.forFeature("basketproduct", basketproductReducer),
    EffectsModule.forFeature([BasketProductEffect])

  ]
})
export class BasketProductlistModule { }