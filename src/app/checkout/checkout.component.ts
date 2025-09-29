import { Component,OnInit } from '@angular/core';
import { ProductService } from "../services/product-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {
  products: any[] = [];
  count:number=1;
  constructor(private productService: ProductService) {}
  handleQty(val:string){
if (val=='plus') {
  this.count=this.count+1;
}
else {
  this.count=this.count-1;
}
  }

    ngOnInit() {
    const selected = this.productService.getSelectedProduct(); // sirf selected product nikaalo
    if (selected) {
      this.products = [selected]; // ✅ array banake table me bind karo
    }
  }

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
