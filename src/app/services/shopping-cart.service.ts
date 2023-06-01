import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public products:Product[]=[];

  constructor(){ }

  addProduct=(product:Product)=>{
    let products=this.getProducts();
    if(products){
      products.push(product);
      localStorage.setItem('shopping-cart',JSON.stringify(products));
    }
    else{
      this.products.push(product);
      localStorage.setItem('shopping-cart',JSON.stringify(this.products));
    }
    
  }

  getProducts=()=>{
    let products=localStorage.getItem('shopping-cart');
    if(products){
      return JSON.parse(products);
    }
    else return null;
  }

  getProductsCount(){
    let products=this.getProducts();
    return products?products.length:0;
  }

  getTotalPrice(){
    let products:Array<Product>=this.getProducts();
    return products?.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0);
  }

  deleteProduct=(product:Product)=>{
    let products=this.getProducts();
    let index=products.findIndex((item:Product)=>item.id===product.id); 
    if(index>=0){
      products.splice(index,1);
      localStorage.setItem('shopping-cart',JSON.stringify(products));
    }
  }

}
