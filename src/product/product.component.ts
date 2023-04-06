import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Product } from '../app/product';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(
    public readonly cartService: CartService
  ) {}
  @Input() item!: Product;

  @Output() outEnterName = new EventEmitter<Product>()

  enterName(product: Product){
    console.log('nameInput',product.id)
    this.cartService.AddItem$(product)
  }

}
