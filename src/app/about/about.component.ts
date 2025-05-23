import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  param:  any;
  email: any;


  constructor(private activatedRoute:ActivatedRoute, private service:ProductService) {
  }

  ngOnInit(): void {
    /*this.service.getProductsWithLimit().subscribe({
        next:(data)=>{
          console.log(data)
        }
    }
    )*/
    let id:number=-1;
    this.service.createProduct().subscribe(product => {console.log("product:",product);})
    // this.service.getProductById().subscribe(product => {console.log("product:",product);});
  }

}
