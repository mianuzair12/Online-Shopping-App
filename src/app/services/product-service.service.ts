import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // yahan apna backend API ka URL dalna hoga
  private selectedProduct: any = null; 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(productId: number, quantity: number = 1): Observable<any> {
    return this.http.post(this.apiUrl, { productId, quantity });
  }

  updateCartItem(id: number, quantity: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { quantity });
  }

  removeCartItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
 
  // ✅ sirf ek product set karo
  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  // ✅ checkout/add-to-cart page par wahi product nikal lo
  getSelectedProduct() {
    return this.selectedProduct;
  }

}
