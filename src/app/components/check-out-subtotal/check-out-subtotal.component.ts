import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-check-out-subtotal',
  templateUrl: './check-out-subtotal.component.html',
  styleUrls: ['./check-out-subtotal.component.scss']
})
export class CheckOutSubtotalComponent {
  
  constructor(public cartService:ShoppingCartService){}
}
