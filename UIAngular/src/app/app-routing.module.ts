import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DigitalComponent } from './digital/digital.component';
import { ErrorComponent } from './error/error.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MittsureComponent } from './mittsure/mittsure.component';
import { TalentComponent } from './talent/talent.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';
import { UpdatecartComponent } from './updatecart/updatecart.component';
import { DeletecartComponent } from './deletecart/deletecart.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
{
  path:'features',
  component:FeaturesComponent
},
{
  path:'talent',
  component:TalentComponent
},
{
  path:'mittsure',
  component:MittsureComponent
},
{
  path:'buynow' , component:BuynowComponent 
},
{
  path:'updatecart' , component:UpdatecartComponent
},
{
  path:'deletecart' , component:DeletecartComponent
},
{
  path:'gallery',
  component:GalleryComponent
},
{
path:'digital',
component:DigitalComponent
},
{
  path:'cart' , component:CartComponent
},
{
path:'contact',
component:ContactComponent
},
{
path:'login',
component:LoginComponent
},
{
  path:'registration',
  component:RegistrationComponent
  },
  {
    path:'admin' , loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'**',
  component:ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
