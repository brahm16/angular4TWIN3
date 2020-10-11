import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {

  @Input() convert:Number;
  aff:Number=0;

  
  constructor() {

   }

  ngOnInit(): void {
  }

}
