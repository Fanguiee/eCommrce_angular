import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductRepresentation} from '../models/product-representation';
import {Observable} from 'rxjs';
import {RatingRepresentation} from '../models/rating-representation';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }

  getProductsWithLimit(limit: number=5): Observable<Array<ProductRepresentation>> {
    const url = `${this.baseUrl}/products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(url);
  }

  createProduct(){
    const url = `${this.baseUrl}/products/`;
    const rating:RatingRepresentation = {
      rate:4.1,
      count:3
    }
    const product:ProductRepresentation = {
      title: "Mango",
      price: 10,
      description: "Sweet, aromatic",
      rating: rating
    };
    return this.http.post<ProductRepresentation>(url, product);
  }

  getProductById(id:number=21){
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<ProductRepresentation>(url);
  }
}
