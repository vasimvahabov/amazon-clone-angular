import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-check-out-products',
  templateUrl: './check-out-products.component.html',
  styleUrls: ['./check-out-products.component.scss']
})
export class CheckOutProductsComponent {
  @Output() deleteEvent:EventEmitter<Product>=new EventEmitter<Product>();
  @Input() checkOutProducts!:Product[];

  constructor(public cartService:ShoppingCartService){}

  ngOnInit(){
    // console.log('Check out products ',this.checkOutProducts);
  }

  deleteProduct(product:Product){
    this.cartService.deleteProduct(product);
    this.deleteEvent.emit(product);
  }

}
