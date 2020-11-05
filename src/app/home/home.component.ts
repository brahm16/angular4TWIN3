import { Component, OnInit } from '@angular/core';
import { Product } from '../../modele/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProduct: Product[];
  priceMax: Number=0;
  showForm:Boolean=false;
  constructor(private productService: ProductService) { }

  incrementLike(product: Product){

    this.productService.incrementLike(product.id)
    console.log("test")
  }
  show(){
    this.showForm=!this.showForm;
  }
  addProduct(product: Product){
    this.productService.setProduct(product);
    console.log("test")
    this.showForm=!this.showForm;

  }
  showFormM(){
    this.showForm=!this.showForm;


  }

  ngOnInit(): void {
    this.listProduct=this.productService.getProducts();
  }

}
