import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cartservice';

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
    private store:Store<any>
  ) {}

//public total$: Observable<number> = this.cartService.GetTotal$();
ngOnInit(): void {
  
  
    this.store.dispatch({type:'LOAD_TOTAL_BASKET_PRODUCT'});
    this.store.subscribe(state=>(this.total$=state.state.total$));
    
   //this.total$=this.cartService.GetTotal$();
    console.log('product total ',this.total$);
  }
}
