// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from "../services/product-service.service";
// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent {
//   product = {
//     name: '',
//     price: 0,
//     discount: 0,
//     image: ''
//   };

//   constructor(private productService: ProductService, private router: Router) {}

//   onSubmit() {
//     this.productService.addProduct(this.product).subscribe(() => {
//       alert('Product Added Successfully!');
//       this.router.navigate(['/products']);  // Product list page pe redirect
//     });
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    discount: 0,
    image: ''  // yahan file ka base64 ya URL save hoga
  };

  previewUrl: string | ArrayBuffer | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  // file select handler
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.product.image = reader.result as string; // save base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product Added Successfully!');
      this.router.navigate(['/home']);
    });
  }
}
