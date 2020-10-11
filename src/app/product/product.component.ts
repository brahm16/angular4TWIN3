import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/modele/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() notification = new EventEmitter<Product>();
  @Input() priceMaxOutput: Number;

  sendNotif(){
    this.notification.emit(this.product);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
