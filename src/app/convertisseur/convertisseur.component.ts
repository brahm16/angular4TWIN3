import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToEuroConvertComponent } from '../to-euro-convert/to-euro-convert.component';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {

  @ViewChild(ToEuroConvertComponent) 
  private toEuroConvertComponent;

  device:Number=0;
  calculer(){
    this.toEuroConvertComponent.aff=+this.device*3.6
  }


  constructor() { }

  ngOnInit(): void {
  }

}
