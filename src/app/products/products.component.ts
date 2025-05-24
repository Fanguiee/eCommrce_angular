import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    ProductDetailsComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products:Array<ProductRepresentation>=[]
  constructor(private activatedRoute:ActivatedRoute, private service:ProductService) {
  }

  ngOnInit(): void {
    this.service.getProductsWithLimit().subscribe({
        next:(data)=>{
          this.products = data;
        }
    })
    /*let id:number=-1;
    this.service.createProduct().subscribe(product => {console.log("product:",product);})*/
    // this.service.getProductById().subscribe(product => {console.log("product:",product);});
  }
}
