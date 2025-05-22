import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  private url = 'https://fakestoreapi.com/products?limit=5';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  get5Products() {
    return this.http.get<any>(this.url);
  }
}
