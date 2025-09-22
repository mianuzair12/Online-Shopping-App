import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { CrouselComponent } from './crousel/crousel.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { FaqComponent } from './faq/faq.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from "@angular/forms";
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';  // 👈 Yahan import zaroori hai
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrouselComponent,
    BrandsComponent,
    ProductsComponent,
    PaymenttypeComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ScrolltopComponent,
    FaqComponent,
    AddtocartComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
