import { Component } from '@angular/core';
import { ProductService } from "../services/product-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})

export class CheckoutComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {}
  
  //  ngOnInit() {
  //   this.loadCart();
  // }

  // loadCart() {
  //    this.productService.getCart().subscribe((data) => {
  //   this.products = data;
  // });
  // }
show(){
  alert('Thankyou for Shopping Experience!')
}
}
