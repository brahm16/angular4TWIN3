import { Component, OnInit } from '@angular/core';
import { Product } from '../../modele/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProduct: Product[];
  priceMax: Number=0;
  constructor() { }

  incrementLike(product: Product){
    let index=this.listProduct.indexOf(product);
    this.listProduct[index].like++;
    console.log("test")
  }

  ngOnInit(): void {
    this.listProduct=[
      {
        id:1,
        title:'T-shirt 1',
        price:20,
        quantity:20,
        like:0
      },
      {
        id:2,
        title:'T-shirt 2',
        price:60,
        quantity:40,
        like:0
      },
      {
        id:3,
        title:'T-shirt 3',
        price:50,
        quantity:10,
        like:0
      }
    ]
  }

}
