import { Component } from '@angular/core';
import { CartService } from '../../service/cartservice';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public readonly cartService: CartService
  ) {}

  public total!: number;
  
  ngOnInit(): void {
    this.total = this.cartService.GetTotal$();
    console.log('total= ',this.total)
  }
}