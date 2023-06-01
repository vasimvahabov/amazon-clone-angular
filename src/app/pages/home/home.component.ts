import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productsList!:Product[];

  constructor(private apiService:APIService){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.apiService.getJSON().subscribe(response=>{
      this.productsList=response;
    });
  }

}
