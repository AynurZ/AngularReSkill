import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cartservice';
import * as fromBasketProduct from "../state/basketproduct.reducer"
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit 
{
  total$!: Observable<number>;

ngOnInit(): void {
    
  }
}
