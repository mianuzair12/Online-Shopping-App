import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../services/product-service.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

Order(id: any) {
  const selected = this.products.find(p => p.id === id); // sirf ek product find karo
  if (selected) {
    this.productService.setSelectedProduct(selected); // service me set karo
    this.router.navigate(['/addtocart']); // AddToCart page par le jao
  }
}

}
