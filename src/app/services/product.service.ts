import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/modele/product';
import { PRODUCTS } from 'src/shared/products';
import { map } from 'rxjs/operators';
import { baseURL } from '../../shared/BaseURL';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(baseURL+'products');
  }
  getProduct(id: number):  Observable<Product>{
    return this.http.get<Product>(baseURL+'products/'+id);
  }
  setProduct(p: Product){
    PRODUCTS.push(p);
  }
  incrementLike(id: Number){
    PRODUCTS.filter(x=>x.id===id)[0].like++;
  }
  constructor(private http: HttpClient) { }
}
