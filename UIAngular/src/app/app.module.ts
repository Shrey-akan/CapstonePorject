import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TalentComponent } from './talent/talent.component';
import { MittsureComponent } from './mittsure/mittsure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturesComponent } from './features/features.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DigitalComponent } from './digital/digital.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';
import { UpdatecartComponent } from './updatecart/updatecart.component';
import { DeletecartComponent } from './deletecart/deletecart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TalentComponent,
    MittsureComponent,
    GalleryComponent,
    FeaturesComponent,
    ErrorComponent,
    LoginComponent,
    ContactComponent,
    DigitalComponent,
    RegistrationComponent,
    CartComponent,
    BuynowComponent,
    UpdatecartComponent,
    DeletecartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
