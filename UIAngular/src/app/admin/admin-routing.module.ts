import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactdetailshowComponent } from './contactdetailshow/contactdetailshow.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { DetailsComponent } from './details/details.component';
import { InsertstudentComponent } from './insertstudent/insertstudent.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path:'adminlogin' , component:AdminloginComponent , 
    children:[

 
  {
    path:'details' , component:DetailsComponent ,
    children:[
      {
        path:'contactdetailshow' , component:ContactdetailshowComponent
      },
      {
        path:'viewdetail' , component:ViewdetailComponent , 
        children:[
          {
            path:'insertstudent' , component:InsertstudentComponent
          },
          {
            path:'deletedetail' , component:DeletedetailComponent
          },
          {
            path:'updatedetails' , component:UpdatedetailsComponent
          }
        ]
      }
    ]
  },
  {
    path:'contactdetailshow' , component:ContactdetailshowComponent
  }
 

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
