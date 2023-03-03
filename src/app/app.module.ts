import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../productlist/productlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/header/header.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
     NgbModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }