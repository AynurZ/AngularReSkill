import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketProductListRoutingModule } from '../../src/basketproductlist/basketproductlist-routing.module';
import { EffectsModule, Actions } from '@ngrx/effects';
import { BasketProductEffect } from './basketproduct.effects';
import { StoreModule  } from '@ngrx/store';
import { basketproductReducer } from '../../src/state/basketproduct.reducer'

@NgModule({
  imports: [
    CommonModule,
    BasketProductListRoutingModule,
    StoreModule.forFeature("basketproduct",basketproductReducer),
    EffectsModule.forFeature([BasketProductEffect])
  ]
})
export class BasketProductlistModule { }