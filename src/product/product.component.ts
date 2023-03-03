import { Component, Input} from '@angular/core';
import { Product } from '../app/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(
    private readonly productService: ProductService
  ) {}
  @Input() item!: Product;

  
  /*
  onAddHandler(item: Product): void{
    this.productService.AddItem(item)
  }*/
}
