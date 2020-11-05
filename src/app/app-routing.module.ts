import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from'@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ex1Component } from './ex1/ex1.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { DetailsSalleComponent } from './details-salle/details-salle.component';

const routes : Routes = [
  {path:"",redirectTo:"product",pathMatch:'full'},
  {path:"ex1",component:Ex1Component},
  {path:"reactive",component:ReactiveFormComponent },
  {path:"product",component:HomeComponent},
  {path:"driven",component:ModelDrivenFormComponent},
  {path:"user",component:UserFormComponent},
  {path:"salles",component:SallesListComponent},
  {path:"product/details/:id",component:DetailsProductComponent},
  {path:"salle/details/:id",component:DetailsSalleComponent},
  {path:"**",component:PageNotFoundComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
