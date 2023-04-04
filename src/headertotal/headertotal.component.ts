import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cartservice';
import * as fromBasketProduct from "../state/basketproduct.reducer"
@Component({
  selector: 'app-headertotal',
  templateUrl: './headertotal.component.html',
  styleUrls: ['./headertotal.component.css']
})
export class HeadertotalComponent implements OnInit 
{
  total$!: Observable<number>;
  
  constructor
  (
    private readonly cartService: CartService,
    private store:Store<any>,
    
  ) {

  }

//public total$: Observable<number> = this.cartService.GetTotal$();
ngOnInit(): void {
    console.log('product total ',this.total$);
  }
}
