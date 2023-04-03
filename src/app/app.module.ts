import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../productlist/productlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/header/header.component';
import { ProductComponent } from '../product/product.component';
import { BasketProductComponent } from '../basketproduct/basketproduct.component';
import { BasketProductListComponent } from '../basketproductlist/basketproductlist.component';
import { HeadertotalComponent } from '../headertotal/headertotal.component';
import { StoreModule } from '@ngrx/store'
import { basketproductReducer } from 'src/state/basketproduct.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("state",basketproductReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductComponent,
    BasketProductListComponent,
    BasketProductComponent,
    HeadertotalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }