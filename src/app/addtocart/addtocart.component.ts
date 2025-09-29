import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  products: any[] = []; // ✅ yaha ek array rakhenge taake table *ngFor ke sath chale
  count:number=1;
  constructor(private productService: ProductService, private router: Router) {}
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

  continueShopping() {
    this.router.navigate(['/home']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
clearShoppingCart(){
  this.products=[];
}

}
