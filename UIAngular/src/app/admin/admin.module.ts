import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { InsertstudentComponent } from './insertstudent/insertstudent.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { ContactdetailshowComponent } from './contactdetailshow/contactdetailshow.component';
import { DetailsComponent } from './details/details.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InsertstudentComponent,
    ViewdetailComponent,
    DeletedetailComponent,
    UpdatedetailsComponent,
    ContactdetailshowComponent,
    DetailsComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
