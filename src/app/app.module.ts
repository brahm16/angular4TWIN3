import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormProductComponent } from './form-product/form-product.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ex1Component } from './ex1/ex1.component';
import { DetailsProductComponent } from './details-product/details-product.component'
import { ProductService } from './services/product.service';
import { SallesListComponent } from './salles-list/salles-list.component';
import { DetailsSalleComponent } from './details-salle/details-salle.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ConvertisseurComponent,
    ToEuroConvertComponent,
    ActorsComponent,
    ActorComponent,
    FormProductComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ModelDrivenFormComponent,
    PageNotFoundComponent,
    Ex1Component,
    DetailsProductComponent,
    SallesListComponent,
    DetailsSalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
