import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products!:Product[];

  // ngOnInit(){
  //   setTimeout(()=>{
  //     console.log(this.products);
  //   },6000);
  // }

  constructor(public cardService:ShoppingCartService){}

  addToCart(product:Product){
    this.cardService.addProduct(product);
  }  
}
