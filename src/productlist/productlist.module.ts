import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './productlist-routing.module';
import { ProductListComponent } from './productlist.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }