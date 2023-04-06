import { Component, Input, Output,EventEmitter} from '@angular/core';
import { BasketProduct } from '../app/basketProduct';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-basketproduct',
  templateUrl: './basketproduct.component.html',
  styleUrls: ['./basketproduct.component.css']
})
export class BasketProductComponent {
  constructor(
    public readonly cartService: CartService
  ) {}
  
  @Input() item!: BasketProduct;

  @Output()
  deletefromBasketProduct = new EventEmitter<BasketProduct>();

  onRemoveHandler(deleteBasketProduct: BasketProduct){
    this.deletefromBasketProduct.emit(deleteBasketProduct);
}

}
