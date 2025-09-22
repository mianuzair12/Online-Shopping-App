import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'faq',component:FaqComponent},
    {path:'addtocart',component:AddtocartComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
