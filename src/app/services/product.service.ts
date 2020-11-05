import { Injectable } from '@angular/core';
import { Product } from 'src/modele/product';
import { PRODUCTS } from 'src/shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[]{
    return PRODUCTS;
  }
  getProduct(id: number): Product{
    return PRODUCTS.filter(x=>x.id===id)[0];
  }
  setProduct(p: Product){
    PRODUCTS.push(p);
  }
  incrementLike(id: Number){
    PRODUCTS.filter(x=>x.id===id)[0].like++;
  }


  constructor() { }
}
