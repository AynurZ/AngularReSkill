import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListModule } from '../productlist/productlist.module';



const routes: Routes = [
  { 
    path: 'product',
    loadChildren: () => import('../productlist/productlist.module').then(m => m.ProductListModule)  
  },
  { 
    path: 'basket',
    loadChildren: () => import('../basketproductlist/basketproductlist.module').then(m => m.BasketProductlistModule)  
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}