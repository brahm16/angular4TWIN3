import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from 'src/modele/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: Product;
  errMess: string;

  constructor(private productService:ProductService, private route: ActivatedRoute) { 
  
  }
  sendNotif(){
    this.productService.incrementLike(this.product.id);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe((product)=>this.product=product,errmess=>{this.errMess=<any>errmess});
  }

}
