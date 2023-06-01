import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class APIService{
  private url:string='assets/data/products.json';

  constructor(private http:HttpClient){}

  getJSON():Observable<Product[]>{
    return <Observable<Product[]>>this.http.get(this.url);
  }
} 