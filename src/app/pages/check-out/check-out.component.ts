import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  productsList!:Product[];

  constructor(public cartService:ShoppingCartService){}

  ngOnInit(){
    this.getCheckOutProducts();
  }

  getCheckOutProducts=()=>{
    this.productsList=this.cartService.getProducts();
  }

  deleteProduct=(product:Product)=>{
    console.log("Product deleted...");
    this.getCheckOutProducts();
  }

}
