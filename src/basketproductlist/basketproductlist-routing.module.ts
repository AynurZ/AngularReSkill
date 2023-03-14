import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketProductListComponent } from './basketproductlist.component';
const routes: Routes = [
  {
    path: '',
    component: BasketProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketProductListRoutingModule { }
