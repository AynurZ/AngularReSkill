import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-headertotal',
  templateUrl: './headertotal.component.html',
  styleUrls: ['./headertotal.component.css']
})
export class HeadertotalComponent {constructor(
  private readonly cartService: CartService
) {}

public total$: Observable<number> = this.cartService.GetTotal$();
ngOnInit(): void {
}
}
